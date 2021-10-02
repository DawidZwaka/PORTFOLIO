//vendors
import gsap, { Power2, Power1 } from "gsap";
import React from "react";
import { connect } from "react-redux";

class RouteOverlay extends React.Component {
	constructor(props) {
		super(props);

		this.tl = null;
	}

	getUIEntryAnim = () => {
		gsap.timeline({ paused: true })
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

	componentDidUpdate() {
		const { loaded } = this.props;

		//if (loaded)
		//	this.getUIEntryAnim().play(0);
	}

	render() {
		return <>{this.props.children}</>;
	}
}

export default connect(({ Loader }) => ({ loaded: Loader.isActive }))(
	RouteOverlay
);
