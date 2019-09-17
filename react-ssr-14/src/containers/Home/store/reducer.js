import { CHANGE_HOME_LIST } from './actions';

const defaultState = {
  list: [],
};
// reducer 接收 action 派发
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
