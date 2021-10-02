//components
import CircleButton from "../../Button/CircleButton/CircleButton";

//util
import Device from "../../../../util/Device";

const Topbar = ({ onclick, classes, type = "bright" }) => {
	const logoCls = ["logo"];
	const toggleIconCls = ["toggler__icon"];
	const topbarCls = ["topbar", classes];

	switch (type) {
		case "dark": {
			logoCls.push("logo--secondary");
			toggleIconCls.push(
				"toggler__icon--cross",
				"toggler__icon--secondary"
			);
		}
		case "bright":
		default:
			break;
	}

	return (
		<header className={topbarCls.join(" ")}>
			<button onClick={onclick} className="toggler">
				<i class={toggleIconCls.join(" ")}></i>
			</button>
			<div className={logoCls.join(" ")}>Zwaka</div>
			{Device.isMobile() ? null : (
				<CircleButton text="contact me page " type={type} />
			)}
		</header>
	);
};

export default Topbar;
