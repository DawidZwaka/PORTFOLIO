//styling
import "./style.scss";

const ClassicLink = ({ href, text }) => {
	return (
		<a className="classicLink" href={href}>
			{text}
		</a>
	);
};

export default ClassicLink;
