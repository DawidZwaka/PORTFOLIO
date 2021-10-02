//util
import InitLoader from "./inc/InitLoader";
import AppLoader from "./inc/AppLoader";
import store from "../../redux/store";
import { loaderTypes } from "../../redux/reducers/reducers/Loader/Loader";

class GlobalLoader {
	static instance = null;
	#loader = null;
	#loaderType = null;

	constructor() {
		return this.#getInstance();
	}

	#getInstance = () => {
		if (GlobalLoader.instance) return GlobalLoader.instance;
		else {
			GlobalLoader.instance = this;
			this.updateLoader();
		}
	};

	updateLoader = () => {
		const {
			Loader: { type },
		} = store.getState();
		let loader;

		if (this.#loaderType === type) return;

		switch (type) {
			case loaderTypes.INITIAL: {
				loader = new InitLoader();
				break;
			}
			case loaderTypes.IN_APP: {
				loader = new AppLoader();
				break;
			}
			default:
				return;
		}

		this.#loaderType = type;
		this.#loader = loader;
	};

	getLoader = () => {
		return this.#loader;
	};
}

export default GlobalLoader;
