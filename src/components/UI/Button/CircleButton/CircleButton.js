import gsap, { Linear } from "gsap/gsap-core";
import React from "react";

class crlBtnSingle {
	static baseClass = "circleButton";
	static ref;

	static updateRef = () => {
		crlBtnSingle.ref = document.querySelectorAll(
			"." + crlBtnSingle.baseClass
		);
	};

	static getRotateAnim = () => {
		return gsap.to(crlBtnSingle.ref, {
			duration: 10,
			rotate: 360,
			repeat: -1,
			ease: Linear.easeNone,
			paused: true,
		});
	};

	static updateListeners = (anim) => {
		crlBtnSingle.ref.forEach((el) => {
			el.removeEventListener("mouseenter", anim);
			el.removeEventListener("mouseleave", anim);

			el.addEventListener("mouseenter", anim);
			el.addEventListener("mouseleave", anim);
		});
	};
}

class CircleButton extends React.Component {
	constructor(props) {
		super(props);

		this.letters = props.text.split("");
	}

	getLetterMarkups = () => {
		const { length } = this.letters;
		const anglePerLetter = 360 / length;

		return this.letters.map((letter, index) => {
			const letterRotation = {
				transform: `rotate(${anglePerLetter * index}deg)`,
			};

			return (
				<span className="circleButton__letter" style={letterRotation}>
					{letter}
				</span>
			);
		});
	};

	reverseAnim = (anim) => {
		if (anim.reversed()) anim.play();
		else anim.reverse();
	};

	componentDidMount() {
		crlBtnSingle.updateRef();
		const rotateAnim = crlBtnSingle.getRotateAnim();

		//rotateAnim.play(0);

		crlBtnSingle.updateListeners(() => this.reverseAnim(rotateAnim));
	}

	render() {
		const { type } = this.props;
		const classes = [crlBtnSingle.baseClass];

		if (type === "dark") classes.push("circleButton--secondary");

		return (
			<div
				className={classes.join(" ")}
				ref={(ref) => (this.button = ref)}
			>
				{this.getLetterMarkups()}
			</div>
		);
	}
}

export default CircleButton;
