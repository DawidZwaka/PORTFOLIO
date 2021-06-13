
import "./AnimatedText.scss";

const AnimatedText = (props) => {

	return <span className="animText"><span className="animText__inside">{props.children}</span></span>;
};

export default AnimatedText;