//vendors
import React from "react";
import { connect } from "react-redux";

//components
import ProjectSlide from "./slides/ProjectSlide.js";
import Controlers from "./nav/Controlers";

//util
import GlobalLoader from "../../util/GlobalLoader/GlobalLoader";
import loaderActions from "../../redux/actions/Loader.js";
import timeout from "../../util/timeout.js";
import sliderState from "./enums/SliderState";

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.slides = [
			{
				title: ["SHOP", "IN", "NODE"],
			},
			{
				title: ["TEST", "IN", "NODE"],
			},
			{
				title: ["TEST", "IN", "NODE"],
			},
		];

		this.state = {
			scrollListenerActive: false,
			startY: null,
			currY: null,
			activeIndex: 0,
			currState: sliderState.IDLE,
		};
	}

	getVectorFromGivenSlideIndex = (index) => {
		const { activeIndex } = this.state;
		let res = 0;

		if (activeIndex < index) res = index - activeIndex;
		else if (activeIndex > index) res = -activeIndex + index;

		return res;
	};

	checkSlideVector = (vector) => {
		const {
			state: { activeIndex },
			slides: { length },
		} = this;
		let res = 0;

		if (vector >= 1 && activeIndex + vector <= length - 1) res = vector;
		if (vector <= -1 && activeIndex + vector >= 0) res = vector;

		return res;
	};

	/**
	 * changeSlide set active slide depeneds on given vector
	 *
	 * if vector is 0 then do nothing
	 *
	 * if is higher than 1, set next slide as active depends on vector power
	 *
	 * if is smaller than -1, set previous slide as active depends on vector power
	 *
	 * @param {number} vector natural number
	 * @return {void}
	 */
	changeSlide = (vector) => {
		const { activeIndex, currState } = this.state;
		let vec = this.checkSlideVector(vector);
		let acRes = activeIndex + vec;

		if (vec !== 0 && currState) {
			this.setState({ ...this.state, activeIndex: acRes });
		}
	};

	/**
	 * Run slide transition sequence and then inform parent component that transition end
	 *
	 * @return {void}
	 */
	changeSlideSequence = async (slideIndex) => {
		const { currState } = this.state;

		if (
			this.checkSlideVector(slideIndex) !== 0 &&
			currState !== sliderState.IN_TRANSITION
		) {
			this.setState({
				...this.state,
				currState: sliderState.IN_TRANSITION,
			});
			this.props.toggleLoader();

			const loader = new GlobalLoader().getLoader();
			const openDur = loader.getOpenAnim().duration() * 1000;
			const closeDur = loader.getCloseAnim().duration() * 1000;

			//scroll to top && close loader after open animation
			await timeout(openDur);

			window.scrollTo(0, 0);

			await timeout(openDur + closeDur);
			this.props.toggleLoader();

			//change slide
			//await timeout(openDur + closeDur);
			this.changeSlide(slideIndex);

			//close loader
			//await timeout(openDur + closeDur);
			//this.entryAnim.play(0);
		}
	};

	handleControlClick = (ev) => {
		const controler = ev.target,
			slideIndex = parseInt(controler.getAttribute("data-slideindex"));

		const vec = this.getVectorFromGivenSlideIndex(slideIndex);

		console.log(this.checkSlideVector(vec), this.state);

		this.changeSlideSequence(vec);
	};

	handleWheel = (ev) => {
		const { deltaY } = ev;
		const viewportHeight = window.innerHeight;
		const scrollFromTop = window.scrollY;
		const pageHeight = document.body.clientHeight;

		if (scrollFromTop + viewportHeight === pageHeight && deltaY > 0)
			this.changeSlideSequence(1);

		if (scrollFromTop === 0 && deltaY < 0) this.changeSlideSequence(-1);
	};

	startTouchMove = (ev) => {
		const startY = ev.touches[0].pageY;

		this.setState({ ...this.state, startY });
	};

	handleTouchMove = (ev) => {
		const currY = ev.touches[0].pageY;
		const { startY } = this.state;

		if (document.scrollingElement.scrollTop === 0 && currY > startY)
			this.changeSlideSequence(-1);

		if (
			window.scrollY > document.body.scrollHeight - window.innerHeight &&
			currY < startY
		)
			this.changeSlideSequence(1);
	};

	componentDidMount() {
		window.addEventListener("wheel", this.handleWheel);
		document.addEventListener("touchmove", this.handleTouchMove, {
			passive: true,
		});
		document.addEventListener("touchstart", this.startTouchMove, {
			passive: true,
		});
	}

	componentWillUnmount() {
		window.removeEventListener("wheel", this.handleWheel);
		document.removeEventListener("touchmove", this.handleTouchMove);
		document.removeEventListener("touchstart", this.startTouchMove);
	}

	render() {
		const { activeIndex } = this.state;

		return (
			<div className="verticalSlider">
				<ProjectSlide
					slide={this.slides[activeIndex]}
					onTransitionEnd={() => {
						console.log("anim end");
						this.setState({
							...this.state,
							currState: sliderState.IDLE,
						});

						console.log(this.state);
					}}
				/>
				<Controlers
					activeIndex={activeIndex}
					amount={this.slides.length}
					onClick={this.handleControlClick}
				/>
			</div>
		);
	}
}

export default connect(null, (dispatch) => ({
	toggleLoader: () => dispatch({ type: loaderActions.TOGGLE_LOADER }),
}))(Slider);
