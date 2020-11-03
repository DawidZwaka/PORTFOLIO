import actions from '../actions/UI';

const initState = {
	menuVisibility: false,
	exitAnim: '',
};

export default (state = initState, action) => {
	switch (action.type) {
		case actions.TOGGLE_MENU: {
			return { ...state, menuVisibility: !state.menuVisibility };
		}
		case actions.SET_EXIT_ANIM: {
			return { ...state, exitAnim: action.exitAnim };
		}
		default:
			return state;
	}
};
