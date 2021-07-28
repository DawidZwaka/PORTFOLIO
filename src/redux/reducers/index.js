import { combineReducers } from 'redux';
import UI from './reducers/UI/UI';
import Animations from './reducers/Animations/Animations';
import Slider from './reducers/Slider/Slider';

export default combineReducers({ UI, Animations, Slider });
