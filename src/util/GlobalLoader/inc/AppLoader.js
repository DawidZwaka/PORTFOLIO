//vendors
import gsap, { Power1 } from "gsap";

//util
import AbstractLoader from "./AbstractLoader";

class AppLoader extends AbstractLoader {
	getOpenAnim = () => {
		return gsap
			.timeline({ paused: true })
			.fromTo(
				"#appLoader",
				{
					clipPath:
						'clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100% )',
				},
				{
					duration: 0.9,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
					ease: Power1.easeInOut,
				}
			)
			.fromTo(
				"#appLoader .appLoader__text",
				{
					opacity: 0,
					translateY: 100,
				},
				{
					duration: 0.9,
					translateY: 0,
					opacity: 1,
				},
				"-=.5"
			);
	};

	getCloseAnim = () => {
		return gsap
			.timeline({ paused: true })
			.fromTo(
				"#appLoader .appLoader__text",
				{
					translateY: 0,
					opacity: 1,
				},
				{
					duration: 0.9,
					translateY: -100,
					opacity: 0,
				}
			)
			.fromTo(
				"#appLoader",
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
				},
				{
					duration: 0.9,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0% )",
					ease: Power1.easeInOut,
				},
				"-=.9"
			);
	};

	getContent = () => (
		<div className="appLoader__text">Wait a seconde please</div>
	);
}

export default AppLoader;
