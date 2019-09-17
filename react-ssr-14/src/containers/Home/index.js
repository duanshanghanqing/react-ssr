import React from 'react';
import { connect } from 'react-redux';
// import { getHomeList } from './store/actions';
import reactMixin from 'react-mixin';
import { Button } from 'antd';
import { actions } from './store';
import mixins from '../../mixins/index';
import './style.css';
import './style.less';

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
  actions,
)
@reactMixin.decorate(mixins())
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div className="Home HomeText">
        {
          this.props.list.map((item, index) => (<p key={index}>{item.title}</p>))
        }
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <img src={require('@/assets/images/bg.jpeg')} alt="背景" />
      </div>
    );
  }
}

// https://reacttraining.com/react-router/web/guides/server-rendering
Home.loadData = store => store.dispatch(actions.getHomeList());


export default Home;
