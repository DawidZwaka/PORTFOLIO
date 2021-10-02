import gsap, { Linear, Power1 } from "gsap/gsap-core";
import React from "react";
import { connect } from "react-redux";

class Ladder extends React.Component {
	amountOfRungs = 0;
	rungs = [];
	rungsItems = [];

	constructor(props) {
		super(props);

		this.amountOfRungs = this.CalcAmountOfRungs();

		for (let i = 0; i < this.amountOfRungs; i++) {
			this.rungsItems.push(
				<div
					className="ladder__rung"
					key={i + "_rung_index"}
					ref={(ref) => this.rungs.push(ref)}
				></div>
			);
		}
	}

	state = {
		inTransition: false,
	};

	CalcAmountOfRungs = () => {
		const width = window.innerWidth;

		return Math.floor(width / 20);
	};

	doRectangle = () => {
		const firstHalf = [...this.rungs].splice(0, this.rungs.length / 2);
		const secondHalf = [...this.rungs].splice(
			this.rungs.length / 2,
			this.rungs.length
		);

		const animOneProps = {
			duration: 0.8,
			height: "100%",
			stagger: {
				each: 0.01,
				ease: Linear.easeNone,
			},
		};

		const tl = gsap
			.timeline({ paused: true })
			.addLabel("start")
			.to(firstHalf.reverse(), animOneProps, "start")
			.to(secondHalf, animOneProps, "start");

		tl.play(0);

		setTimeout(
			() => this.setState({ ...this.state, inTransition: false }),
			tl.duration() * 1000
		);

		this.setState({ ...this.state, inTransition: true });
	};

	componentDidMount() {
		//this.doRectangle();
	}

	doTriangle = () => {
		const firstHalf = [...this.rungs].splice(0, this.rungs.length / 2);
		const secondHalf = [...this.rungs].splice(
			this.rungs.length / 2,
			this.rungs.length
		);

		const animOneProps = {
			duration: 0.8,
			height: 0,
			stagger: {
				each: 0.01,
				ease: Linear.easeNone,
			},
		};

		const tl = gsap.timeline({ paused: true }).addLabel("start");

		firstHalf.forEach((el, index) => {
			tl.to(
				el,
				{
					duration: 0.3,
					height: (index * 100) / firstHalf.length + "%",
				},
				"start"
			);
		});

		secondHalf.reverse().forEach((el, index) => {
			tl.to(
				el,
				{
					duration: 0.3,
					height: (index * 100) / firstHalf.length + "%",
				},
				"start"
			);
		});

		tl.play(0);

		setTimeout(() => {
			this.setState({ ...this.state, inTransition: false });
		}, tl.duration() * 1000);

		this.setState({ ...this.state, inTransition: true });
	};

	componentDidUpdate() {
		/*const { isPointerClickable } = this.props;

		if (!this.state.inTransition) {
			if (isPointerClickable) this.doTriangle();
			else this.doRectangle();
		}*/
	}

	render() {
		const { className } = this.props;
		return (
			<div className={["ladder", className].join(" ")}>
				{this.rungsItems}
			</div>
		);
	}
}

export default Ladder;
