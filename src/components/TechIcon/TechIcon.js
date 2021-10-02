//styling
import "./style.scss";

//icons
import { ReactComponent as Mongodb } from "../../assets/icons/mongodb-icon.svg";
import { ReactComponent as Nodejs } from "../../assets/icons/nodejs-icon.svg";
import { ReactComponent as Pug } from "../../assets/icons/pug-icon.svg";
import { ReactComponent as Sass } from "../../assets/icons/sass-icon.svg";
import { ReactComponent as Js } from "../../assets/icons/js-icon.svg";

//util
import types from "./TechIconEnum";

const TechIcon = ({ type }) => {
	let icon = [];

	switch (type) {
		case types.JS: {
			icon.push(<Js />);
			break;
		}
		case types.MONGODB: {
			icon.push(<Mongodb />);
			break;
		}
		case types.NODEJS: {
			icon.push(<Nodejs />);
			break;
		}
		case types.PUG: {
			icon.push(<Pug />);
			break;
		}
		case types.SASS: {
			icon.push(<Sass />);
			break;
		}
		default: {
			icon.push(<p>Incorrect icon type</p>);
		}
	}

	return <li className="techIcon">{icon}</li>;
};

export default TechIcon;
