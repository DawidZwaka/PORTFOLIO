import React from "react";
import Image from "../../assets/about-image.png";
import AnimatableContainer from "../../HOC/AnimatableContainer";
import AboutAnims from "./AboutAnims";
import CoveredPicture from "../../components/CoveredPicture";
import PortalBlock from "../../HOC/PortalBlock/PortalBlock";

const About = () => {
	const classRefs = {
		TITLE: "about__title",
		IMAGE: "about__image",
		CONTENT_1: "about__content1",
		CONTENT_2: "about__content2",
		SKILLS_TITLE: "about__skills",
		LEARNING_TITLE: "about__learning",
	};

	return (
		<AnimatableContainer AnimClass={AboutAnims}>
			<main className="about">
				<h1 className={classRefs.TITLE}>
					<PortalBlock>few</PortalBlock>
					<PortalBlock>words</PortalBlock>
					<PortalBlock>ABOUT</PortalBlock>
					<PortalBlock>me</PortalBlock>
				</h1>
				<CoveredPicture
					className={classRefs.IMAGE}
					src={Image}
					alt=""
				/>
				<PortalBlock classes={`${classRefs.CONTENT_1} py-5`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vulputate cras porttitor a sed mollis eget aenean. Varius
					leo placerat sed id ipsum. Mattis tincidunt at ante in.
					Pharetra ac tristique sit faucibus natoque.
				</PortalBlock>
				<PortalBlock classes={`${classRefs.CONTENT_2} py-5`}>
					Varius leo placerat sed id ipsum. Mattis tincidunt at ante
					in. Pharetra ac tristique sit faucibus natoque. Varius leo
					placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra
					ac tristique sit faucibus natoque.Varius leo placerat sed id
					ipsum. Mattis tincidunt at ante in. Pharetra ac tristique
					sit faucibus natoque.
				</PortalBlock>
				<div className={classRefs.SKILLS_TITLE}>
					<h2>skills</h2>
				</div>
				<div className={classRefs.LEARNING_TITLE}>
					<h2>still learning</h2>
				</div>
			</main>
		</AnimatableContainer>
	);
};

export default About;
