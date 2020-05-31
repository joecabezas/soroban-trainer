import { OPEN_DRAWER_SECTION } from '../action_types';

const initialState = {
  section: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER_SECTION:
      return {
        ...state,
        section: action.value,
      };
    default:
      return state;
  }
}
