//vendors
import { connect } from "react-redux";

//components
import SliderControlers from "./Slider/nav/Controlers";
import Cover from "./Cover";
//import Particles from './UI/Particles';

//redux
import sliderStateEnum from "../redux/reducers/reducers/Slider/SliderState";

const FixedComponents = (props) => {
	const { activeSlideIndex, sliderState } = props;

	return (
		<>
			<div className="bottomBar">
				<div className="scroll_down">
					<div class="scroll_down__inner"></div>
				</div>
				<div className="temp">HOME</div>
			</div>
			<Cover />
			{sliderStateEnum.INACTIVE !== sliderState ? (
				<SliderControlers activeIndex={activeSlideIndex} amount={3} />
			) : null}
		</>
	);
};

export default connect(({ Slider }) => ({
	sliderState: Slider.sliderState,
	activeSlideIndex: Slider.activeIndex,
}))(FixedComponents);
