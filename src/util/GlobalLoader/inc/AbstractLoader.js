//vendors
import gsap from "gsap";

//util
import store from "../../../redux/store";
import loaderActions from "../../../redux/actions/Loader";

class AbstractLoader {
	getOpenAnim = () => {
		throw new Error(
			"You have to implement method openAnim, that returns gsap open loader animation instance"
		);
	};

	getCloseAnim = () => {
		throw new Error(
			"You have to implement method closeAnim, that returns gsap close loader animation instance"
		);
	};

	getContent = () => {
		throw new Error(
			"You have to implement method getContent, that returns content for loader"
		);
	};

	openLoader = async () => {
		const open = this.getOpenAnim();

		await open.play(0);

		open.clear();
	};

	closeLoader = async () => {
		const close = this.getCloseAnim();

		await close.play(0);

		close.clear();
	};

	updateLoaderAnimDuration = () => {
		store.dispatch({
			type: loaderActions.UPDATE_ENTRY_ANIM_DURATION,
			duration: this.getOpenAnim().duration(),
		});
		store.dispatch({
			type: loaderActions.UPDATE_EXIT_ANIM_DURATION,
			duration: this.getCloseAnim().duration(),
		});
	};
}

export default AbstractLoader;
