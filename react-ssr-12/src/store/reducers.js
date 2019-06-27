import { combineReducers } from 'redux';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as translationReducer } from '../containers/Translation/store';

// 合并系统全部Reducer
export default combineReducers({
    homeReducer,
    headerReducer,
    translationReducer
});
