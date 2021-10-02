//vendors
import { Power4 } from "gsap/gsap-core";
import gsap from "../../../util/ScrollTriggerGsap";
import React from "react";

//components
import TechIcon from "../../TechIcon/TechIcon";
import PortalBlock from "../../../HOC/PortalBlock/PortalBlock";
import HorizontalList from "../../Lists/HorizontalList/HorizontalList";

//util
import iconTypes from "../../TechIcon/TechIconEnum";

//images
import mobile from "../../../assets/images/mobile.png";

class ProjectSlide extends React.Component {
	constructor(props) {
		super(props);

		this.scrollTopDelay = 700;
		this.scrollTopDuration = 500;

		this.entryAnim = gsap.timeline({ paused: true });
		//this.transitionTime = this.scrollTopDuration;

		gsap.killTweensOf();
	}

	/**
	 * Modify class property and adds to it entry animation
	 */
	setEntryAnim = () => {
		gsap.timeline()
			.addLabel("start", 0.7)
			.from(
				".header__title .animText__inside ",
				{
					yPercent: -100,
					opacity: 0,
					duration: 0.9,
					ease: Power4.easeOut,
					stagger: {
						each: 0.15,
					},
				},
				"start"
			)
			.addLabel("iterator", "-=1")
			.from(
				".header__iterator .animText__inside",
				{
					xPercent: -100,
					opacity: 0,
					duration: 1,
				},
				"iterator"
			)
			.from(
				".slide__teaser .animText__inside",
				{
					duration: 0.5,
					opacity: 0,
					yPercent: 100,
				},
				"iterator"
			);

		const mockups = [".slide__mockup--mobile1", ".slide__mockup--mobile2"];

		mockups.forEach((mockup) => {
			gsap.from(mockup, {
				scrollTrigger: {
					trigger: mockup,
					start: "top 90%",
				},
				duration: 0.7,
				xPercent: -10,
				scale: 0.7,
				opacity: 0,
			});
		});

		const textSections = [".slide__features", ".slide__tech"];

		textSections.forEach((textSection) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: textSection + " .slide__subtitle",
					start: "top 90%",
					markers: true,
				},
			}).from(
				[
					textSection + " .slide__subtitle",
					textSection + " .slide__paragraph",
				],
				{
					duration: 0.7,
					yPercent: -100,
					opacity: 0,
					stagger: { each: 0.5 },
				}
			);
		});
	};

	entryNewSlide = async () => {
		this.props.onTransitionEnd();
	};

	/**
	 * When component mount, then prepare entry anim, set max slide changing sequence transition time
	 */
	componentDidMount() {
		//this.setEntryAnim();
		//this.transitionTime += this.entryAnim.time();

		this.entryNewSlide();
	}

	/**
	 * When component updated, then run new slide changing sequence
	 */
	componentDidUpdate() {
		this.entryNewSlide();
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
				<div className="slide__header">
					<h1 className="header__title"> {animTitle} </h1>
					<span className="header__iterator">
						<PortalBlock> O1 </PortalBlock>
					</span>
				</div>
				<p className="slide__teaser">
					<PortalBlock>
						shop_in_node is an online shop app used for managing
						your store.
					</PortalBlock>
				</p>
				<div className="slide__mockup slide__mockup--mobile1">
					<div className="mockup__inside">
						<img
							src={mobile}
							style={{ zIndex: 1, maxWidth: "100%" }}
							alt="app screen mobile"
						/>
					</div>
				</div>

				<article className="slide__features">
					<h2 className="slide__subtitle">Featu res</h2>
					<p className="slide__paragraph">
						The application includes functionalities such as user
						authorization, submission and management of orders,
						management of products, user account page, English and
						Polish languages support, store configuration,
						statistics panel and many many others...
					</p>
				</article>

				<div className="slide__mockup slide__mockup--mobile2">
					<div className="mockup__inside">
						<img
							src={mobile}
							style={{ zIndex: 1, maxWidth: "100%" }}
							alt="app screen mobile"
						/>
					</div>
				</div>
				<article className="slide__tech">
					<h2 className="slide__subtitle">Tech Stack</h2>
					<p className="slide__paragraph">
						shop_in_node is build with MVC model.The backbone of
						this application is Express.js, Mongodb as database and
						clean js on the frontend.
					</p>
				</article>

				<div className="slide__stack">
					<HorizontalList>
						<TechIcon key={"2iuhu"} type={iconTypes.JS} />
						<TechIcon key={2} type={iconTypes.MONGODB} />
						<TechIcon key={3} type={iconTypes.NODEJS} />
						<TechIcon key={4} type={iconTypes.PUG} />
						<TechIcon key={5} type={iconTypes.SASS} />
					</HorizontalList>
				</div>
			</div>
		);
	}
}

export default ProjectSlide;
