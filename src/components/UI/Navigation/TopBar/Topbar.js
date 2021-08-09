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
			break;
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
			<div className="contactBtn">
				<span className="rotateText rotateText--1">c</span>
				<span className="rotateText rotateText--2">o</span>
				<span className="rotateText rotateText--3">n</span>
				<span className="rotateText rotateText--4">t</span>
				<span className="rotateText rotateText--5">a</span>
				<span className="rotateText rotateText--6">c</span>
				<span className="rotateText rotateText--7">t</span>
			</div>
		</header>
	);
};

export default Topbar;
