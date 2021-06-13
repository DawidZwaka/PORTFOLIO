import { ReactComponent as Mongodb } from '../../../assets/mongodb-icon.svg';
import { ReactComponent as Nodejs } from '../../../assets/nodejs-icon.svg';
import { ReactComponent as Pug } from '../../../assets/pug-icon.svg';
import { ReactComponent as Sass } from '../../../assets/sass-icon.svg';
import { ReactComponent as Js } from '../../../assets/js-icon.svg';
import types from './TechIconEnum';

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

    return <li>{icon}</li>;
}

export default TechIcon;