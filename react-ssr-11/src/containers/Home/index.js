import React from 'react';
import { connect } from 'react-redux';
// import { getHomeList } from './store/actions';
import { actions } from './store';
import reactMixin from 'react-mixin';
import mixins from '../../mixins/index';
import style from './style.css';

// @connect(
//   state => ({ list: state.homeReducer.list }),
//   dispatch => ({
//     getHomeList() {
//       dispatch(getHomeList());
//     }
//   }),
// )
@connect(
  state => ({ list: state.homeReducer.list }),
  actions
)
@reactMixin.decorate(mixins())
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  // 只在客户端执行
  componentDidMount() {
    // 当在浏览器渲染的时候，只有数据不存在事执行获取
    if (this.props.list.length === 0) {
      this.props.getHomeList();
    }
  }
  render() {
    return (
      <div className={style.Home}>
        {
          this.props.list.map((item, index) => (<p key={index}>{item.title}</p>))
        }
      </div>
    );
  }
}

// https://reacttraining.com/react-router/web/guides/server-rendering
Home.loadData = (store) => {
  // 负责页面渲染之前，在路由数据提前加载好
  // 把action 内 返回的 Promise 在返回出去，执行多个用 Promise.all 处理
  return store.dispatch(actions.getHomeList());
}

export default Home;
