import actions from '../../../actions/UI';

const initState = {
	menuActive: false,
	scrollbar: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
	switch (action.type) {
		case actions.TOGGLE_MENU: {
			return { ...state, menuActive: !state.menuActive };
		}
		case actions.SET_SCROLLBAR: {
			return { ...state, scrollbar: action.scrollbar };
		}
		case actions.SET_SCROLLBAR_OVERSCROLL_LISTENER: {
			const updatedScrollbar = state.scrollbar;

			updatedScrollbar.options.plugins.overscroll.onScroll = action.onScroll;


			return { ...state, scrollbar: updatedScrollbar };
		}
		case actions.FLUSH_SCROLLBAR_OVERSCROLL_LISTENER: {
			const updatedScrollbar = state.scrollbar;

			updatedScrollbar.options.plugins.overscroll.onScroll = null;

			return { ...state, scrollbar: updatedScrollbar };
		}
		default:
			return state;
	}
};
