import actions from '../../../actions/Animations';

const initState = {
    scrollTriggerGsap: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case actions.SET_SCROLL_TRIGER_GSAP: {
            return { ...state, scrollTriggerGsap: action.gsap };
        }
        default:
            return state;
    }
};
