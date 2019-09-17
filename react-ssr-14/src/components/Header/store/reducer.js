import { CHANGELOGIN } from './actions';

const defaultState = {
  login: true,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGELOGIN:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
