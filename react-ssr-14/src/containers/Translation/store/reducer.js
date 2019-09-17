import { CHANGE_TRANSLATION_LIST } from './actions';

const defaultState = {
  translationlist: [],
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TRANSLATION_LIST:
      return {
        ...state,
        translationlist: action.data,
      };
    default:
      return state;
  }
};
