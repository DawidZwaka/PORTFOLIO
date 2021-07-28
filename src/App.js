//vendors
import { Switch, Route } from "react-router-dom";
import gsap from "gsap/gsap-core";
import React from "react";
import { connect } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//containers
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

//components
import MainMenu from "./components/UI/Navigation/MainMenu/MainMenu";
import AppBackground from "./components/UI/Background";
import ScrollBar from "./components/UI/ScrollBar/ScrollBar";
import FixedComponents from "./components/FixedComponents";

//redux
import uiActions from "./redux/actions/UI";
import animActions from "./redux/actions/Animations";

class App extends React.Component {
	//const { pathname } = useLocation();
	constructor(props) {
		super(props);

		this.scrollbarRef = null;
	}

	routes = [
		{ name: "Home", path: "/", Component: Home },
		{ name: "About", path: "/about", Component: About },
		{ name: "Projects", path: "/projects", Component: Projects },
		{ name: "Contact", path: "/contact", Component: Contact },
	];

	setScrollbarRefToGlobalState = () => {
		const { scrollbar } = this.scrollbarRef;

		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.scrollerProxy("body", {
			scrollTop(value) {
				if (arguments.length) {
					scrollbar.scrollTop = value; // setter
				}
				return scrollbar.scrollTop; // getter
			},
		});

		scrollbar.addListener(ScrollTrigger.update);

		this.props.setScrollbar(scrollbar);
		this.props.setScrollTrigerGsap(gsap);
	};

	componentDidMount() {
		this.setScrollbarRefToGlobalState();
	}

	getComponentRoutes = () => {
		return this.routes.map(({ path, Component }, index) => {
			return (
				<Route
					exact
					path={path}
					key={index}
					component={(props) => <Component {...props} />}
				/>
			);
		});
	};

	render() {
		return (
			<>
				<ScrollBar
					dumping={0.01}
					autohide="true"
					ref={(ref) => (this.scrollbarRef = ref)}
				>
					<main id="mainContent">
						<MainMenu routes={this.routes} />
						<Switch>{this.getComponentRoutes()}</Switch>
						<AppBackground />
					</main>
				</ScrollBar>
				<FixedComponents />
			</>
		);
	}
}

export default connect(null, (dispatch) => ({
	setScrollbar: (scrollbar) => {
		dispatch({ type: uiActions.SET_SCROLLBAR, scrollbar });
	},
	setScrollTrigerGsap: (gsap) => {
		dispatch({ type: animActions.SET_SCROLL_TRIGER_GSAP, gsap });
	},
}))(App);
