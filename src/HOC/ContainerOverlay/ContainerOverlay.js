//vendors
import React from "react";
import { connect } from "react-redux";
import gsap, { Power2, Power1 } from "gsap";

//util
import sizes from "./sizes";
import AppRoutes from "../../routes";
import loaderActions from "../../redux/actions/Loader";
import uiActions from "../../redux/actions/UI";

class ContainerOverlay extends React.Component {
	getUIEntryAnim = () => {
		return gsap
			.timeline({ paused: true })
			.from(
				".landing__sphere",
				{
					duration: 3,
					height: 170,
					ease: Power2.easeInOut,
				},
				"-=1.6"
			)
			.addLabel("landing", "-=1")
			.from(
				".scroll_down, .navigator",
				{
					yPercent: 50,
					opacity: 0,
					duration: 1.5,
					ease: Power1.easeOut,
				},
				"landing+=0.2"
			)
			.from(
				".toggler, .contactBtn",
				{
					yPercent: -50,
					opacity: 0,
					duration: 1.5,
					ease: Power2.easeOut,
				},
				"landing"
			)
			.from(
				".logo",
				{
					yPercent: 50,
					opacity: 0,
					duration: 1.5,
					ease: Power2.easeOut,
				},
				"landing+=0.1"
			);
	};

	resolveContainerSize = () => {
		const { size } = this.props;

		switch (size) {
			case sizes.FULL_WIDTH: {
				document.querySelector("html").classList.add("fullHeight");
				break;
			}
			case sizes.DEFAULT:
			default: {
				document.querySelector("html").classList.remove("fullHeight");
				break;
			}
		}
	};

	componentDidMount() {
		const { loadedRoutes } = this.props;

		loadedRoutes.forEach((route) => {
			if (AppRoutes.isCurrRoute(route)) this.props.toggleLoader();
		});
	}

	componentDidUpdate() {
		const { loading, uiVisible } = this.props;

		if (loading && !uiVisible) {
			//this.getUIEntryAnim().play(0);
			this.props.setUIVisibility(true);
		}
	}

	render() {
		this.resolveContainerSize();

		return <>{this.props.children}</>;
	}
}
export default connect(
	({ Loader, UI }) => ({
		loadedRoutes: Loader.loadedRoutes,
		loading: Loader.isActive,
		uiVisible: UI.visible,
	}),
	(dispatch) => ({
		toggleLoader: () => dispatch({ type: loaderActions.TOGGLE_LOADER }),
		setUIVisibility: (visibility) =>
			dispatch({ type: uiActions.SET_VISIBILITY, visibility }),
	})
)(ContainerOverlay);
