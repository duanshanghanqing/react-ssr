import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import { actions } from './store';
import mixins from '../../mixins';
import './style.css';

@connect(
  state => ({ login: state.headerReducer.login }),
  { ...actions },
)
@reactMixin.decorate(mixins())
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { login, handleLogin, handleLogout } = this.props;
    return (
      <div className="Header">
        <Link to="/home">首页</Link>
---
        {
                    login ? (
                      <React.Fragment>
                        <Link to="/translation">翻译列表</Link>
---
                        <span onClick={handleLogout}>退出</span>
                      </React.Fragment>
                    )
                      : <span onClick={handleLogin}>登陆</span>
                }
      </div>
    );
  }
}

export default Header;
