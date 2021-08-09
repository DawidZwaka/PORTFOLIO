//node_modules
import gsap, { Power3 } from "gsap";
import React from "react";
import { connect } from "react-redux";

//components
import MainNav from "../MainNav/MainNav";
import Animate from "../../../../HOC/Animate";
import Topbar from "../TopBar/Topbar";
import BgAnimControler from "../../../../util/BackgroundAnimControler";

//util
import Storage from "../../../../util/AnimStorage";
import actions from "../../../../redux/actions/UI";

/*const styling = {
	fixed: {
		duration: 0.5,
		ease: Power3.in,
		exit: { display: 'none', opacity: 0, transform: 'scale(0.8)' },
		appear: { transform: 'scale(1)', opacity: 1, display: 'block' },
	},
	nav: { entry: { opacity: 0, transform: 'scale(.7)' }, exit: null },
};*/

const entryAnim = () => {
	const tl = gsap.timeline();

	tl.fromTo(
		".fixed",
		{ clipPath: "circle(0% at 4rem 3.5rem)" },
		{
			clipPath: "circle(140% at 4rem 3.5rem)",
			ease: Power3.easeIn,
		}
	).from(".nav_item", 0.4, { opacity: 0, x: 100 }, 0.1, "-= 0.2");
};

const exitAnim = () => {
	gsap.timeline().fromTo(
		".fixed",
		{ clipPath: "circle(140% at 4rem 3.5rem)" },
		{
			clipPath: "circle(0% at 4rem 3.5rem)",
			ease: Power3.easeOut,
		}
	);
};

class MainMenu extends React.PureComponent {
	exitPageSequenceHandler = (ev) => {
		ev.preventDefault();

		const href = ev.currentTarget.pathname;
		BgAnimControler.setLocation({
			curr: window.location.pathname,
			next: href,
		});
		const { entry, exit } = BgAnimControler.getTransitionsAnims();

		Storage.setAsFirst("exit", exit);
		Storage.set("entry", entry);

		console.log("exit delay", Storage.getDuration("exit"));

		//close menu
		this.props.toggleMenu();

		//play exit animation from animation storage
		Storage.play("exit");

		setTimeout(() => {
			this.props.history.push(href);
		}, Storage.getDuration("exit") * 1000);
	};

	componentDidUpdate() {
		console.log("rerender menu");
	}

	render() {
		const { routes, toggleMenu, show } = this.props;

		const render = (
			<>
				<Topbar onclick={toggleMenu} />
				<div className={`fixed ${show ? "active" : ""}`}>
					<Topbar
						onclick={toggleMenu}
						type="dark"
						classes="fixed_header"
					/>
					<section className="fixed_content">
						<MainNav
							onclick={this.exitPageSequenceHandler}
							routes={routes}
						/>
					</section>
					<footer className="fixed_footer">
						<hr />
						<div className="fixed_footer__inner">
							<div className="lang_switcher">
								<strong>Lang:</strong>
								<button>EN</button>
								<button>PL</button>
							</div>
							<div className="socials">
								<a href="https://www.linkedin.com/in/zwakadawid/">
									linkedin
								</a>
								<a href="https://github.com/DawidZwaka">
									github
								</a>
								<a href="https://www.facebook.com/dawid.zwaka">
									facebook
								</a>
								<a href="https://www.instagram.com/dawidzwaka/">
									instagram
								</a>
							</div>
						</div>
					</footer>
				</div>
			</>
		);

		return render;
	}
}

export default connect(
	({ UI }) => ({ show: UI.menuActive }),
	(dispatch) => ({
		toggleMenu: () => {
			dispatch({ type: actions.TOGGLE_MENU });
		},
	})
)(Animate(entryAnim, exitAnim)(MainMenu));
