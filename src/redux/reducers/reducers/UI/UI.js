import actions from "../../../actions/UI";

const initState = {
	visible: false,
	menuActive: false,
	pointer: {
		isClickable: false,
		target: null,
		text: null,
	},
	followerActive: true,
	cursorPosition: {
		left: 0,
		top: 0,
	},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
	switch (action.type) {
		case actions.TOGGLE_MENU: {
			return { ...state, menuActive: !state.menuActive };
		}
		case actions.TOGGLE_FOLLOWER: {
			return { ...state, followerActive: !state.followerActive };
		}
		case actions.TURN_POINTER_INTO_BUTTON: {
			const { target, text } = action;
			return {
				...state,
				pointer: { ...state.pointer, isClickable: true, target, text },
			};
		}
		case actions.TURN_POINTER_INTO_BULLET: {
			return {
				...state,
				pointer: { ...state.pointer, isClickable: false },
			};
		}
		case actions.UPDATE_CURSOR_POSITION: {
			const { left, top } = action;

			return {
				...state,
				cursorPosition: {
					left,
					top,
				},
			};
		}
		case actions.SET_VISIBILITY: {
			return { ...state, visible: action.visibility };
		}
		default:
			return state;
	}
};
