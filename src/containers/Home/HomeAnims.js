import gsap, { Power4 } from "gsap";
import ContainerAnims from "../../util/ContainerAnims";

class HomeAnims extends ContainerAnims {
	hooks = {
		figure: ".landing__figure",
		circle: ".landing__circle",
		content: ".landing__content > *",
		content_first: ".landing__content > *:first-child",
	};

	getShiftLength = (elem, direction) => {
		const { x, y, width, height, bottom } = document
			.querySelector(elem)
			.getBoundingClientRect();
		let shift = 0;

		switch (direction) {
			case "left":
			default: {
				shift -= x + width;
				break;
			}
			case "right": {
				shift += window.innerWidth - x;
				break;
			}
			case "up": {
				shift -= y + height;
				break;
			}
			case "bottom": {
				shift += bottom + height;
				break;
			}
		}

		return shift;
	};

	entry = () => {
		const { figure, content, circle, content_first } = this.hooks;

		this.entry = gsap
			.timeline({ paused: true })
			.from(
				figure,
				{
					x: this.getShiftLength(figure, "left"),
					duration: 1,
					ease: Power4.easeOut,
				},
				"<.3"
			)
			.staggerFrom(
				content,
				0.4,
				{
					x: this.getShiftLength(content_first, "left"),
					opacity: 0,
				},
				0.1,
				"< -.2"
			)
			.to(
				circle,
				{
					duration: 0.7,
					strokeDashoffset: 0,
				},
				"-=.3"
			);
	};

	exit = () => {
		const { figure, content, content_first, circle } = this.hooks;
		//gsap.defaults({ ease: Power4.easeIn });

		this.exit = gsap
			.timeline({ paused: true })
			.to(
				circle,
				{
					duration: 0.7,
					strokeDashoffset: 2000,
				},
				"<"
			)
			.to(
				figure,
				{
					x: this.getShiftLength(figure, "right"),
					duration: 1,
				},
				"<"
			)
			.staggerTo(
				content,
				0.4,
				{ x: this.getShiftLength(content_first, "right"), opacity: 0 },
				0.1,
				"<.4"
			);
	};
}

export default HomeAnims;
