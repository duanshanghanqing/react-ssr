import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { actions } from './components/Header/store';
import './assets/less/global.less';

const App = props => (
  <div>
    <Header />
    {renderRoutes(props.route.routes)}
  </div>
);

App.loadData = store => store.dispatch(actions.getHeaderInfo());

export default App;
