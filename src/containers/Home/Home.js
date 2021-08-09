import image from "../../assets/img.png";
import dawidzwaka from "../../assets/dawid_zwaka.svg";
import arrow from "../../assets/arrow_1.svg";
import React from "react";
import HomeAnims from "./HomeAnims";
import AnimatableContainer from "../../HOC/AnimatableContainer";
import gsap, { Power3, Power1 } from "gsap/gsap-core";
import CoveredPicture from "../../components/CoveredPicture";

class Home extends React.Component {
	componentDidMount() {
		gsap.timeline()
			.delay(0.5)
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
					transform: "scale(120%)",
				},
				{
					duration: 0.7,
					transform: "scale(100%)",
					ease: Power1.easeOut,
				},
				"showImage"
			);
	}

	render() {
		const render = (
			<main className="landing">
				<h1 class="heading">
					Self-taught programmer, clean code lover and full stack
					developer.
				</h1>
				<div className="landing__portrait">
					{/*<img
						className="portrait"
						src={image}
						onLoad={this.handleLoaded}
						alt="landing page hero"
                    />*/}
					<CoveredPicture src={image} alt="" />
				</div>
				{/*<aside className="landing__see_portfolio">
					<span className="text">see my work</span>
					<img src={arrow} class="arrow" alt="arrow icon" />
        </aside>*/}
			</main>
		);

		return render;
	}
}

export default Home;
