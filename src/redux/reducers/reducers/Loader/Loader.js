import actions from "../../../actions/Loader";

const loaderTypes = {
	INITIAL: "initial",
	IN_APP: "in_app",
};

const initState = {
	isActive: true,
	type: loaderTypes.INITIAL,
	entryAnimDur: 0,
	exitAnimDur: 0,
	loadedRoutes: [],
};

export { loaderTypes };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
	switch (action.type) {
		case actions.TOGGLE_LOADER: {
			return { ...state, isActive: !state.isActive };
		}
		case actions.SET_LOADER_TYPE: {
			const types = Object.values(loaderTypes);

			if (types.includes(action.loaderType))
				return { ...state, type: action.loaderType };
			else return { ...state };
		}
		case actions.ADD_LOADED_ROUTE: {
			return {
				...state,
				loadedRoutes: [...state.loadedRoutes, action.name],
			};
		}
		case actions.UPDATE_ENTRY_ANIM_DURATION: {
			return { ...state, entryAnimDur: action.duration };
		}
		case actions.UPDATE_EXIT_ANIM_DURATION: {
			return { ...state, exitAnimDur: action.duration };
		}
		default:
			return state;
	}
};
