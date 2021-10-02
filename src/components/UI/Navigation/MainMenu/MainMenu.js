//node_modules
import gsap, { Power3, Power1 } from "gsap";
import React from "react";
import { connect } from "react-redux";

//components
import MainNav from "../MainNav/MainNav";
import Animate from "../../../../HOC/Animate";
import Topbar from "../TopBar/Topbar";
import ClassicLink from "../../../Buttons/ClassicLink/ClassicLink";

//util
import uiActions from "../../../../redux/actions/UI";
import loaderActions from "../../../../redux/actions/Loader";
import timeout from "../../../../util/timeout";

const entryAnim = () => {
	const tl = gsap.timeline();

	tl.fromTo(
		".fixed",
		{ clipPath: "circle(0% at 4rem 3.5rem)" },
		{
			clipPath: "circle(140% at 4rem 3.5rem)",
			ease: Power3.easeIn,
		}
	).fromTo(
		".main_nav__item",
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.4,
			ease: Power1.easeOut,
			stagger: {
				each: 0.2,
			},
		},
		"-= 0.2"
	);
};

const exitAnim = () => {
	gsap.timeline()
		.addLabel("start")
		.to(".main_nav__item", {
			opacity: 0,
			x: 100,
			duration: 0.4,
			ease: Power1.easeIn,
			stagger: {
				each: 0.2,
			},
		})
		.fromTo(
			".fixed",
			{ clipPath: "circle(140% at 4rem 3.5rem)" },
			{
				clipPath: "circle(0% at 4rem 3.5rem)",
				ease: Power3.easeOut,
			},
			"start"
		);
};

class MainMenu extends React.PureComponent {
	exitPageSequenceHandler = async (ev) => {
		ev.preventDefault();
		const href = ev.currentTarget.pathname;
		const { openLoaderDur } = this.props;
		const routeChangeDelay = openLoaderDur * 1000;

		//close menu
		this.props.toggleMenu();

		//open loader
		this.props.toggleLoader();

		await timeout(routeChangeDelay);

		this.props.history.push(href);
	};

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
							<div className="socials">
								<ClassicLink
									href="https://www.facebook.com/dawid.zwaka"
									text="facebook"
								/>
								<ClassicLink
									href="https://www.instagram.com/dawidzwaka"
									text="instagram"
								/>
								<ClassicLink
									href="https://www.linkedin.com/in/zwakadawid"
									text="linkedin"
								/>
								<ClassicLink
									href="https://github.com/DawidZwaka"
									text="github"
								/>
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
	({ UI, Loader }) => ({
		show: UI.menuActive,
		openLoaderDur: Loader.entryAnimDur,
	}),
	(dispatch) => ({
		toggleMenu: () => {
			dispatch({ type: uiActions.TOGGLE_MENU });
		},
		toggleLoader: () => {
			dispatch({ type: loaderActions.TOGGLE_LOADER });
		},
	})
)(Animate(entryAnim, exitAnim)(MainMenu));
