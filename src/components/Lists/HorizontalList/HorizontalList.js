import "./style.scss";

const HorizontalList = (props) => {
	const { children, className } = props;

	return (
		<ul className={["horizontalList", className].join(" ")}>{children}</ul>
	);
};

export default HorizontalList;
