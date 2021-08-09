import React from "react";
import { connect } from "react-redux";

class Cursor extends React.Component {
	constructor(props) {
		super(props);

		this.circle = null;
		this.dot = null;
	}

	state = {
		position: {
			top: 0,
			left: 0,
		},
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

		this.setState({
			...this.state,
			position: {
				left: clientX || pageX,
				top: clientY || pageY,
			},
		});
	};

	followMouse = () => {
		const { top, left } = this.state.position;
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

		if (this.circle) {
			this.circle.style.left = x + "px";
			this.circle.style.top = y + "px";
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
		this.followMouse(this.circle);
	}

	render() {
		const { position } = this.state;
		const { isMenuActive } = this.props;

		return (
			<>
				<div
					className={[
						"cursor__circle",
						isMenuActive ? "cursor--menuActive" : null,
					].join(" ")}
					style={position}
					ref={(ref) => (this.circle = ref)}
				></div>
				<div
					className={[
						"cursor__dot",
						isMenuActive ? "cursor--menuActive" : null,
					].join(" ")}
					style={position}
					ref={(ref) => (this.dot = ref)}
				></div>
			</>
		);
	}
}

export default connect(({ UI }) => ({ isMenuActive: UI.menuActive }))(Cursor);
