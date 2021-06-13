import React from 'react';
import gsap from 'gsap';
import Controler from './Controler';
import ProjectSlide from './ProjectSlide.js';

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0,
		};
		this.animationTl = {
			entry: gsap.timeline({ paused: true }),
			exit: gsap.timeline({ paused: true }),
		};
		this.slides = props.slides;
		this.slide = { info: [], img: '' };
		this.controls = [];
	}

	initAnimations = () => {
		const { info, img } = this.slide;
		//gsap.defaults({ ease: Power2.easeOut });
		//.gsap.defaults({ ease: Power2.easeIn });
		/*this.animationTl.entry
			.staggerFromTo(
				info,
				0.7,
				{
					y: 200,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
				},
				0.2
			)
			.from(
				img,
				{
					y: 100,
					opacity: 0,
					duration: 1,
				},
				{
					y: 0,
					opacity: 1,
				},
				'-=.7'
			);

		this.animationTl.exit
			.staggerTo(
				info,
				0.7,
				{
					y: -200,
					opacity: 0,
				},
				0.1
			)
			.to(
				img,
				{
					y: -100,
					opacity: 0,
					duration: 1,
				},
				'-=.7'
			);*/
	};

	componentDidMount() {
		this.initAnimations();
		console.log('mount');

		//this.animationTl.entry.play(0);

		//document.addEventListener('wheel', this.handleWheel);
	}

	componentWillUnmount() {
		console.log('unmount');
		//document.removeEventListener('wheel', this.handleWheel);
	}

	componentDidUpdate() {
		console.log('update');
		//this.animationTl.entry.play(0);
	}

	shouldSliderUpdate = (nextActiveIndex) => {
		const tl = this.animationTl,
			{ activeIndex } = this.state;

		return (
			!tl.entry.isActive() &&
			!tl.exit.isActive() &&
			nextActiveIndex !== activeIndex
		);
	};

	updateSlider = (nextSlideIndex) => {
		if (this.shouldSliderUpdate(nextSlideIndex)) {
			//const tl = this.animationTl;
			//tl.exit.play(0);

			/*setTimeout(() => {
				console.log('anim end');
				this.setState({
					...this.state,
					activeIndex: nextSlideIndex,
				});
			}, tl.exit.duration() * 1000);*/
		} else {
			return;
		}
	};

	handleWheel = (ev) => {
		const { deltaY } = ev,
			maxLength = this.slides.length;
		let slideIndex = this.state.activeIndex;

		if (deltaY > 0) {
			slideIndex++;
			slideIndex %= maxLength;
		} else if (deltaY < 0) {
			if (slideIndex === 0) slideIndex = maxLength;
			slideIndex--;
		}

		this.updateSlider(slideIndex);
	};

	handleControlClick = (ev) => {
		const controler = ev.target,
			slideIndex = parseInt(controler.getAttribute('data-slideindex'));

		this.updateSlider(slideIndex);
	};

	render() {
		const { activeIndex } = this.state,
			controls = [];

		for (let i = 0; i < this.slides.length; i++) {
			controls.push(
				<Controler
					ref={(ref) => this.controls.push(ref)}
					onclick={this.handleControlClick}
					slideIndex={i}
					active={activeIndex === i}
					key={i}
				/>
			);
		}
		console.log(this.slides[activeIndex]);

		return (
			<div className='verticalSlider'>
				<ProjectSlide props={this.slides[activeIndex]} />
				<div className='controls'>{controls}</div>
			</div>
		);
	}
}

export default Slider;
