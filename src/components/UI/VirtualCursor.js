import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import uiActions from "../../redux/actions/UI";

class VirtualCursor extends React.PureComponent {
	constructor(props) {
		super(props);

		this.follower = null;
		this.pointer = null;
	}

	state = {
		temps: {
			x: void 0,
			y: void 0,
			dx: void 0,
			dy: void 0,
			key: -1,
		},
	};

	handleCursorMovment = (ev) => {
		const { clientX, clientY, pageX, pageY } = ev;

		this.props.updateCursorPosition(clientX || pageX, clientY || pageY);
	};

	followMouse = () => {
		const { top, left } = this.props.cursorPosition;
		const { x, y, dx, dy } = this.state.temps;

		const keyTemp = requestAnimationFrame(this.followMouse);
		let xTemp = x,
			yTemp = y,
			dxTemp = dx,
			dyTemp = dy;

		if (!x || !y) {
			xTemp = left;
			yTemp = top;
		} else {
			dxTemp = (left - x) * 0.125;
			dyTemp = (top - y) * 0.125;
			if (Math.abs(dx) + Math.abs(dy) < 0.1) {
				xTemp = left;
				yTemp = top;
			} else {
				xTemp += dxTemp;
				yTemp += dyTemp;
			}
		}

		if (this.follower) {
			this.follower.style.left = x + "px";
			this.follower.style.top = y + "px";
		}

		this.setState({
			...this.state,
			temps: {
				...this.state.temps,
				x: xTemp,
				y: yTemp,
				dx: dxTemp,
				dy: dyTemp,
				key: keyTemp,
			},
		});
	};

	componentDidMount() {
		window.addEventListener("mousemove", this.handleCursorMovment);
		this.followMouse(this.follower);
	}

	render() {
		const { cursorPosition } = this.props;
		const { isMenuActive, isFollowerActive, pointer } = this.props;

		return (
			<>
				<div
					className={[
						"cursor__follower",
						isMenuActive ? "cursor--menuActive" : null,
						isFollowerActive ? null : "cursor__follower--disable",
					].join(" ")}
					style={cursorPosition}
					ref={(ref) => (this.follower = ref)}
				></div>
				<Link
					to={pointer.target ? pointer.target : null}
					className={[
						"cursor__pointer",
						isMenuActive ? "cursor--menuActive" : null,
						pointer.isClickable
							? "cursor__pointer--clickable"
							: null,
					].join(" ")}
					style={cursorPosition}
					ref={(ref) => (this.pointer = ref)}
				>
					{pointer.text ? pointer.text : null}
				</Link>
			</>
		);
	}
}

export default connect(
	({ UI }) => ({
		isMenuActive: UI.menuActive,
		pointer: UI.pointer,
		isFollowerActive: UI.followerActive,
		cursorPosition: UI.cursorPosition,
	}),
	(dispatch) => ({
		updateCursorPosition: (left, top) =>
			dispatch({ type: uiActions.UPDATE_CURSOR_POSITION, left, top }),
	})
)(VirtualCursor);
