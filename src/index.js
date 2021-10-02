//node_modules
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import loadable from "@loadable/component";

//utils
import store from "./redux/store";

//styling
import "./sass/loader.scss";
import "./sass/index.scss";

//components
import Loader from "./components/Loader/Loader";
const App = loadable(() => import("./App"));

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
			<Loader />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
