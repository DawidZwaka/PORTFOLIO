import gsap, { Power4 } from "gsap/gsap-core";
import Floating from "../UI/Floating";
import TechIcon from "./TechIcon/TechIcon";
import iconTypes from "./TechIcon/TechIconEnum";
import mobile from "../../assets/mobile.png";
import desktop from "../../assets/dektop.png";
import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions/Slider";
import PortalBlock from "../../HOC/PortalBlock/PortalBlock";

class ProjectSlide extends React.Component {
	constructor(props) {
		super(props);

		this.scrollTopDelay = 700;
		this.scrollTopDuration = 500;

		this.props.setTransitionTime(this.scrollTopDuration);
		//this.props.setTransitionDelay(this.scrollTopDelay);

		this.entryAnim = gsap.timeline({ paused: true });
		this.transitionTime = this.scrollTopDuration;

		gsap.killTweensOf();
	}

	/**
	 * Modify class property and adds to it entry animation
	 */
	setEntryAnim = () => {
		this.entryAnim = gsap
			.timeline({ paused: true })
			.addLabel("start", 0.7)
			.staggerFrom(
				".slide_title .animText__inside",
				0.9,
				{
					yPercent: -100,
					opacity: 0,
					ease: Power4.easeOut,
				},
				0.15,
				"start"
			)
			.addLabel("iterator", "-=1")
			.from(
				".slide_iterator .animText__inside",
				{
					xPercent: -100,
					opacity: 0,
					duration: 1,
				},
				"iterator"
			)
			.from(
				".slide_teaser .animText__inside",
				{
					duration: 0.5,
					opacity: 0,
					yPercent: 100,
				},
				"iterator"
			)
			.addLabel("images", "-=.9")
			.staggerFrom(
				".slide_img img",
				0.7,
				{
					x: 150,
					scale: 0.7,
					opacity: 0,
				},
				0.1,
				"images"
			);
	};

	/**
	 * Run slide transition sequence and then inform parent component that transition end
	 *
	 * @return {void}
	 */
	changeSlideSequence = () => {
		setTimeout(() => {
			this.props.scrollbar.scrollTo(0, 0, this.scrollTopDuration);
		}, this.scrollTopDelay);

		setTimeout(() => {
			this.entryAnim.play(0);
		}, this.scrollTopDuration + this.scrollTopDelay);

		setTimeout(() => {
			this.props.onTransitionEnd();
		}, this.transitionTime);
	};

	/**
	 * When component mount, then prepare entry anim, set max slide changing sequence transition time
	 */
	componentDidMount() {
		this.setEntryAnim();
		this.transitionTime += this.entryAnim.time();

		this.entryAnim.play(0);
	}

	/**
	 * When component updated, then run slide changing sequence
	 */
	componentDidUpdate() {
		this.changeSlideSequence();
	}

	/**
	 * allow component to update only when next slide object is not the same as previous
	 */
	shouldComponentUpdate(nextProps) {
		const prevSlide = this.props.slide;
		const nextSlide = nextProps.slide;

		if (prevSlide === nextSlide) return false;

		return true;
	}

	/**
	 * Render slide
	 */
	render() {
		const {
			slide: { title },
		} = this.props;

		const animTitle = title.map((t) => {
			return <PortalBlock> {t} </PortalBlock>;
		});

		return (
			<div className="slide">
				<div className="slide_header pt-5">
					<h1 className="slide_title"> {animTitle} </h1>
					<span className="slide_iterator">
						<PortalBlock> 01 </PortalBlock>
					</span>
				</div>
				<p className="slide_teaser pb-5">
					<PortalBlock>
						shop_in_node is an online shop app used for managing
						your store.
					</PortalBlock>
				</p>
				<div className="slide_img py-5">
					<img
						src={mobile}
						className="mobile"
						style={{ zIndex: 1 }}
						alt="app screen mobile"
					/>
					<img
						src={desktop}
						className="desktop"
						alt="app screen desktop"
					/>
					<Floating maxDeviation="10"> </Floating>
				</div>
				<article className="slide_tech py-5">
					<h2> Technologies </h2>
					<p>
						shop_in_node is build with MVC model.The backbone of
						this application is Express.js, Mongodb as database and
						clean js on the frontend.
					</p>
				</article>
				<article className="slide_features py-5">
					<h2> Features </h2>
					<p>
						The application includes functionalities such as user
						authorization, submission and management of orders,
						management of products, user account page, English and
						Polish languages support, store configuration,
						statistics panel and many many others...
					</p>
				</article>
				<div className="slide_stack">
					<h4> Whole Tech Stack </h4>
					<ul className="stack_list">
						<TechIcon key={1} type={iconTypes.JS} />
						<TechIcon key={2} type={iconTypes.MONGODB} />
						<TechIcon key={3} type={iconTypes.NODEJS} />
						<TechIcon key={4} type={iconTypes.PUG} />
						<TechIcon key={5} type={iconTypes.SASS} />
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(null, (dispatch) => ({
	setTransitionTime: (duration) =>
		dispatch({
			type: actions.SET_SLIDER_TRANSITION_TIME,
			transitionTime: duration,
		}),
}))(ProjectSlide);
