/* vendors */
import React from "react";
import gsap, { Power3, Power1, Power2, Power4, Linear } from "gsap/gsap-core";

/* components */
import HomeAnims from "./HomeAnims";
import AnimatableContainer from "../../HOC/AnimatableContainer";
import CoveredPicture from "../../components/CoveredPicture";
import PortalBlock from "../../HOC/PortalBlock/PortalBlock";
import Ladder from "../../components/Ladder";

/* assets */
import Sphere from "../../components/Sphere";

class Home extends React.Component {
	componentDidMount() {
		/*gsap.timeline()
			.delay(0.2)
			.addLabel("start")
			.to(
				".coveredPicture__cover",
				{
					right: "0",
					duration: 0.7,
					ease: Power3.easeIn,
				},
				"start"
			)
			.set(".coveredPicture__img", { opacity: 1 })
			.addLabel("showImage")
			.to(
				".coveredPicture__cover",
				{
					left: "100%",
					duration: 0.7,
					ease: Power1.easeOut,
				},
				"showImage"
			)
			.fromTo(
				".coveredPicture__img",
				{
					scale: 1.2,
				},
				{
					duration: 0.7,
					scale: 1,
					ease: Power1.easeOut,
				},
				"showImage"
			);

		gsap.timeline().delay(0.5).staggerFrom(
			".heading .animText__inside",
			0.9,
			{
				opacity: 0,
				yPercent: 30,
				ease: Power1.easeInOut,
			},
			0.2
		);*/

		//gsap.set(".sphere", { height: "100%" });

		const rungs = document.querySelectorAll(".ladder__rung");
		const firstHalf = [...rungs].splice(0, rungs.length / 2);
		const secondHalf = [...rungs].splice(rungs.length / 2, rungs.length);

		const animOneProps = {
			duration: 0.8,
			height: "100%",
			stagger: {
				each: 0.01,
				ease: Linear.easeNone,
			},
		};

		gsap.timeline({ delay: 2 })
			.from(
				".landing__sphere",
				{
					duration: 3,
					height: 170,
					ease: Power2.easeInOut,
				},
				"-=1.6"
			)
			.from(
				".landing__title",
				{
					yPercent: 50,
					opacity: 0,
					duration: 1.5,
					ease: Power2.easeOut,
				},
				"landing"
			)
			.to(firstHalf.reverse(), animOneProps, "landing")
			.to(secondHalf, animOneProps, "landing");
	}

	render() {
		const render = (
			<main className="landing">
				<Ladder className="landing__ladder" />
				<Sphere className="landing__sphere" />
				<h6 className="landing__title">
					Don't be a<br />
					stranger
				</h6>
			</main>
		);

		return render;
	}
}

export default Home;
