import actions from '../actions/UI';

const initState = {
	menuActive: false,
	exitAnim: '',
};

export default (state = initState, action) => {
	switch (action.type) {
		case actions.TOGGLE_MENU: {
			return { ...state, menuActive: !state.menuActive };
		}
		case actions.SET_EXIT_ANIM: {
			return { ...state, exitAnim: action.exitAnim };
		}
		default:
			return state;
	}
};
