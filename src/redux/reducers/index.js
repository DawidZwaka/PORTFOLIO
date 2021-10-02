import { combineReducers } from "redux";
import UI from "./reducers/UI/UI";
import Slider from "./reducers/Slider/Slider";
import Loader from "./reducers/Loader/Loader";

export default combineReducers({ UI, Slider, Loader });
