import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import serverAxios from '../server/axios';
import clientAxios from '../client/axios';

// export default () => {
//     const store = createStore(reducers, compose(
//         applyMiddleware(thunk)
//     ));
//     return store;
// }

export const createServerStore = (req) => {
  const store = createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument(serverAxios(req))),
  ));
  return store;
};

export const createClientStore = () => {
  // 把服务端返回的数据，做为客户端默认数据使用。客户端的数据和服务器端的数据一致
  // 实现数据注水和脱水
  const defaultStore = window._context.state;
  const store = createStore(reducers, defaultStore, compose(
    applyMiddleware(thunk.withExtraArgument(clientAxios())),
  ));
  return store;
};
