//vendors
import React from "react";
import Noise from "../assets/images/bgNoise.png";
import { connect } from "react-redux";

//util
import uiActions from "../redux/actions/UI";

class Sphere extends React.Component {
	componentDidMount() {
		if (this.static !== true) {
			this.sphere.addEventListener("mouseenter", (ev) => {
				console.log("get in!");
				this.props.makePointerClickable("PORTFOLIO", "/pojects");
				this.props.toggleFollower();
			});

			this.sphere.addEventListener("mouseleave", (ev) => {
				this.props.makePointerBullet();
				this.props.toggleFollower();
			});
		}
	}

	render() {
		const { className } = this.props;

		return (
			<div
				className={["sphere", className].join(" ")}
				ref={(ref) => (this.sphere = ref)}
			>
				<div className="sphere__shadow sphere__shadow--1"></div>
				<div className="sphere__shadow sphere__shadow--2"></div>
				<img className="sphere__grain" src={Noise} alt="grain effect" />
			</div>
		);
	}
}

export default connect(
	({ UI }) => ({ cursorPosition: UI.cursorPosition }),
	(dispatch) => ({
		makePointerClickable: (text, target) =>
			dispatch({
				type: uiActions.TURN_POINTER_INTO_BUTTON,
				text,
				target,
			}),
		makePointerBullet: () =>
			dispatch({ type: uiActions.TURN_POINTER_INTO_BULLET }),
		toggleFollower: () => dispatch({ type: uiActions.TOGGLE_FOLLOWER }),
	})
)(Sphere);
