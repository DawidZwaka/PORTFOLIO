//vendors
import React from "react";
import { connect } from "react-redux";

//util
import GlobalLoader from "../../util/GlobalLoader/GlobalLoader";

class Loader extends React.Component {
	globalLoader = new GlobalLoader();

	constructor(props) {
		super(props);

		this.globalLoader.getLoader().updateLoaderAnimDuration();
	}

	resolveState = async () => {
		const { active } = this.props;
		const loader = this.globalLoader.getLoader();

		if (active) {
			await loader.openLoader();
		} else {
			await loader.closeLoader();
		}
	};

	componentDidMount() {
		this.resolveState();
	}

	componentDidUpdate() {
		this.resolveState();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.active === this.props.active) {
			return false;
		}

		return true;
	}

	render() {
		const loader = this.globalLoader.getLoader();

		return (
			<div id="appLoader" className="appLoader">
				{loader.getContent()}
			</div>
		);
	}
}

export default connect(({ Loader }) => ({
	active: Loader.isActive,
	type: Loader.type,
}))(Loader);
