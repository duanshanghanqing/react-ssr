import { combineReducers } from 'redux';
import { reducer as homeReducer } from '../containers/Home/store';

// 合并系统全部Reducer
export default combineReducers({
    homeReducer
});
