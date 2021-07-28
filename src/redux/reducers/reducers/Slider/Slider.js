import actions from '../../../actions/Slider';
import sliderState from './SliderState';

const initState = {
    transitionTime: 0,
    activeIndex: 0,
    sliderState: sliderState.INACTIVE,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case actions.SET_SLIDER_TRANSITION_TIME: {
            return { ...state, transitionTime: action.transitionTime };
        }
        case actions.SET_SLIDER_STATE: {
            return { ...state, sliderState: action.sliderState };
        }
        case actions.SET_ACTIVE_INDEX: {
            return { ...state, activeIndex: action.activeIndex };
        }
        default:
            return state;
    }
};
