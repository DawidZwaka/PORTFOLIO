import React from "react";
import ProjectSlide from "./ProjectSlide.js";
import { connect } from "react-redux";
import sliderActions from "../../redux/actions/Slider";
import uiActions from "../../redux/actions/UI";
import sliderState from "../../redux/reducers/reducers/Slider/SliderState";

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.props.setSliderState({ sliderState: sliderState.IDLE });

		this.slides = [
			{
				title: ["SHOP", "_IN", "_NODE"],
			},
			{
				title: ["TEST", "_IN", "_NODE"],
			},
			{
				title: ["TEST", "_IN", "_NODE"],
			},
		];

		this.state = {
			scrollListenerActive: false,
		};
	}

	/**
	 * changeSlide set active slide depeneds on given vector
	 *
	 * if vector is 0 then do nothing
	 *
	 * if 1 then set next slide as active
	 *
	 * if -1 then set prev slide as active
	 *
	 * @param {number} vector one of them: [-1, 0, 1]
	 * @return {void}
	 */
	changeSlide = (vector) => {
		const {
			props: { activeIndex },
			slides: { length },
		} = this;
		let flag = false;
		let acRes = activeIndex;

		if (vector === 1 && activeIndex !== length - 1) {
			++acRes;
			flag = true;
		}

		if (vector === -1 && activeIndex !== 0) {
			--acRes;
			flag = true;
		}

		if (flag) {
			this.props.setActiveSlideIndex(acRes);
			this.props.setSliderState(sliderState.IN_TRANSITION);
		}
	};

	handleOverscrollEvent = () => {
		const {
			props: { scrollbar },
		} = this;

		if (scrollbar && !this.state.scrollListenerActive) {
			this.props.setOverscrollListener((overStatus) => {
				if (this.props.currState !== sliderState.IN_TRANSITION) {
					const yMomentum = overStatus.y;
					let changingVector = 0;

					if (yMomentum > 0) changingVector = 1;

					if (yMomentum < 0) changingVector = -1;

					if (changingVector) {
						this.changeSlide(changingVector);
					}
				}
			});

			this.setState({ scrollListenerActive: true });
		}
	};

	deleteHandleOverscrollListener = () => {
		const { props: scrollbar } = this;

		scrollbar.options.plugins.overscroll.onScroll = null;
	};

	componentDidMount() {
		this.handleOverscrollEvent();
	}

	componentDidUpdate() {
		this.handleOverscrollEvent();
	}

	componentWillUnmount() {
		this.props.setSliderState(sliderState.INACTIVE);
		this.props.flushOverscrollListener();
	}

	handleControlClick = (ev) => {
		const controler = ev.target,
			slideIndex = parseInt(controler.getAttribute("data-slideindex"));

		this.updateSlider(slideIndex);
	};

	transitionEndHandler = () => {
		this.props.setSliderState(sliderState.IDLE);
	};

	render() {
		const {
			props: { scrollbar, activeIndex },
		} = this;

		return (
			<div className="verticalSlider">
				<ProjectSlide
					scrollbar={scrollbar}
					slide={this.slides[activeIndex]}
					onTransitionEnd={this.transitionEndHandler}
				/>
			</div>
		);
	}
}

export default connect(
	({ UI, Slider }) => ({
		scrollbar: UI.scrollbar,
		activeIndex: Slider.activeIndex,
		currState: Slider.sliderState,
	}),
	(dispatch) => ({
		setSliderState: (state) =>
			dispatch({
				type: sliderActions.SET_SLIDER_STATE,
				sliderState: state,
			}),
		setActiveSlideIndex: (index) =>
			dispatch({
				type: sliderActions.SET_ACTIVE_INDEX,
				activeIndex: index,
			}),
		setOverscrollListener: (listener) =>
			dispatch({
				type: uiActions.SET_SCROLLBAR_OVERSCROLL_LISTENER,
				onScroll: listener,
			}),
		flushOverscrollListener: () =>
			dispatch({ type: uiActions.FLUSH_SCROLLBAR_OVERSCROLL_LISTENER }),
	})
)(Slider);
