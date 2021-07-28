import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import stateEnum from "../redux/reducers/reducers/Slider/SliderState";

const coverStl = {
	inset: "0",
	position: "absolute",
	background: "#fff",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 10000,
	clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100% )",
};

const Cover = (props) => {
	const { sliderState, transitionTime } = props;
	const cvr = useRef();
	let anim = useRef(null);

	useEffect(() => {
		if (cvr) {
			if (!anim.current)
				anim.current = gsap
					.timeline({ paused: true })
					.to(cvr.current, {
						duration: 0.7,
						clipPath:
							"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )",
					})
					.set({}, {}, `+=${transitionTime / 1000}`)
					.to(cvr.current, {
						duration: 0.7,
						clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0% )",
					});

			switch (sliderState) {
				case stateEnum.IN_TRANSITION: {
					anim.current.play(0);
					break;
				}
				case stateEnum.INACTIVE:
				case stateEnum.IDLE:
				default: {
					break;
				}
			}
		}
	});

	return (
		<div style={coverStl} ref={cvr}>
			<div className="logo" style={{ color: "#090909" }}>
				Zwaka
			</div>
		</div>
	);
};

export default connect(({ Slider }) => ({
	sliderState: Slider.sliderState,
	transitionTime: Slider.transitionTime,
}))(Cover);
