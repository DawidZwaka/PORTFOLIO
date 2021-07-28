import gsap, { Power2 } from "gsap/gsap-core";
import ContainerAnims from "../../util/ContainerAnims";

class AboutAnims extends ContainerAnims {
	hooks = {
		figure: ".landing__figure",
		circle: ".landing__circle",
		content: ".landing__content > *",
		content_first: ".landing__content > *:first-child",
	};

	entry = () => {
		const text = Array.from(
			document.querySelectorAll(".about__title .animText__inside")
		);

		this.entry = gsap
			.timeline({ paused: true })
			.staggerFrom(
				[text[0], text[2]],
				0.6,
				{
					opacity: 0,
					yPercent: -100,
					ease: Power2.easeOut,
				},
				0.3
			)
			.staggerFrom(
				[text[1], text[3]],
				0.6,
				{
					opacity: 0,
					yPercent: -100,
					ease: Power2.easeOut,
				},
				0.3,
				"-=.4"
			);
	};

	exit = () => {
		this.exit = gsap
			.timeline({ paused: true })
			.to("main", { opacity: 1 }, 0.3);
	};
}

export default AboutAnims;
