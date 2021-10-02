//vendors
import React from "react";
import gsap, { Power2 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import { connect } from "react-redux";

//components
import CoveredPicture from "../../components/CoveredPicture";
import PortalBlock from "../../HOC/PortalBlock/PortalBlock";
import TechIcon from "../../components/TechIcon/TechIcon";
import HorizontalList from "../../components/Lists/HorizontalList/HorizontalList";

//util
import iconTypes from "../../components/TechIcon/TechIconEnum";

//images
import Image from "../../assets/images/about-image.png";

const entry = () => {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.refresh();

	const title = Array.from(
		document.querySelectorAll(".about__title .animText__inside")
	);
	const text = [".about__content1", ".about__content2"];

	const titleAnimProps = {
		opacity: 0,
		yPercent: -100,
		ease: Power2.easeOut,
		duration: 0.6,
		stagger: {
			each: 0.3,
		},
	};

	gsap.timeline()
		.from([title[0], title[2]], titleAnimProps)
		.from([title[1], title[3]], titleAnimProps, "-=.4");

	const textAnimProps = {
		opacity: 0,
		yPercent: -100,
		ease: Power2.easeOut,
		duration: 0.6,
		stagger: {
			each: 0.3,
		},
	};

	text.forEach((txt) => {
		gsap.from(txt, {
			scrollTrigger: {
				trigger: txt,
				start: "bottom 30%",
				markers: true,
			},
			xPercent: 20,
			opacity: 0,
		});
	});
};

class About extends React.Component {
	componentDidMount() {
		//entry();
	}

	render() {
		return (
			<main className="about">
				<h3 className="about__title">
					<PortalBlock>few</PortalBlock>
					<PortalBlock>words</PortalBlock>
					<PortalBlock>ABOUT</PortalBlock>
					<PortalBlock>me</PortalBlock>
				</h3>
				<div className="about__image">
					<CoveredPicture src={Image} alt="" />
				</div>
				<div className="about__sideTitle">
					<h1 className="sideTitle__inner">CREATOR</h1>
				</div>
				<p className="about__content1 py-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vulputate cras porttitor a sed mollis eget aenean. Varius
					leo placerat sed id ipsum. Mattis tincidunt at ante in.
					Pharetra ac tristique sit faucibus natoque.
				</p>
				<p className="about__content2 py-5">
					Varius leo placerat sed id ipsum. Mattis tincidunt at ante
					in. Pharetra ac tristique sit faucibus natoque. Varius leo
					placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra
					ac tristique sit faucibus natoque.Varius leo placerat sed id
					ipsum. Mattis tincidunt at ante in. Pharetra ac tristique
					sit faucibus natoque.
				</p>
				<div className="about__techStack">
					<h5 className="techStack__title">Main tech stack</h5>
					<HorizontalList>
						<TechIcon key={1} type={iconTypes.JS} />
						<TechIcon key={2} type={iconTypes.MONGODB} />
						<TechIcon key={3} type={iconTypes.NODEJS} />
						<TechIcon key={4} type={iconTypes.PUG} />
						<TechIcon key={5} type={iconTypes.SASS} />
					</HorizontalList>
				</div>
			</main>
		);
	}
}

export default connect(({ Loader }) => ({ isLoading: Loader.isActive }))(About);
