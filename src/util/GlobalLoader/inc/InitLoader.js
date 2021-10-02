//vendors
import gsap, { Power1, Power2 } from "gsap";

//components
import Sphere from "../../../components/Sphere";

//util
import AbstractLoader from "./AbstractLoader";

class InitLoader extends AbstractLoader {
	getOpenAnim = () => {
		return gsap
			.timeline({ paused: true })
			.addLabel("start", 0.5)
			.from(
				"#appLoader .appLoader__orb",
				{
					opacity: 0,
					duration: 2,
					ease: Power1.easeInOut,
				},
				"start"
			)
			.from(
				"#appLoader .appLoader__text",
				{
					translateY: 50,
					opacity: 0,
					duration: 1.5,
					ease: Power1.easeInOut,
				},
				"start"
			);
	};

	getCloseAnim = () => {
		return gsap.timeline({ paused: true }).fromTo(
			"#appLoader",
			{
				clipPath:
					"polygon(0% 0%,0% 50%,100% 50%,100% 50%,0% 50%,0% 100%,100% 100%,100% 0%)",
			},
			{
				duration: 2,
				clipPath:
					"polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)",
				ease: Power2.easeInOut,
			}
		);
	};

	getContent = () => (
		<>
			<Sphere static="true" className="appLoader__orb" />
			<span class="appLoader__text" style={{ marginTop: "240px" }}>
				LOADING{" "}
			</span>{" "}
		</>
	);
}

export default InitLoader;
