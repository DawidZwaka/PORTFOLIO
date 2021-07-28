import { Power3 } from "gsap/gsap-core";
import { useEffect } from "react";
import { connect } from "react-redux";

const CoveredPicture = (props) => {
	const { src, alt, className } = props;

	useEffect(() => {
		const { gsap } = props;

		if (gsap) {
			gsap.defaults({ ease: Power3.easeInOut, paused: false });
			gsap.timeline({
				scrollTrigger: {
					trigger: ".coveredPicture",
					start: "top 70%",
				},
			})
				.addLabel("start")
				.to(
					".coveredPicture__cover",
					{
						right: "0",
						duration: 0.7,
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
					},
					"showImage"
				)
				.fromTo(
					".coveredPicture__img",
					{
						height: "120%",
					},
					{
						duration: 0.7,
						height: "100%",
					},
					"showImage"
				);
		}
	});

	return (
		<div className={["coveredPicture", className].join(" ")}>
			<div className="coveredPicture__cover"></div>
			<img className="coveredPicture__img" src={src} alt={alt} />
		</div>
	);
};

export default connect(({ UI, Animations }) => ({
	scrollbar: UI.scrollbar,
	gsap: Animations.scrollTriggerGsap,
}))(CoveredPicture);
