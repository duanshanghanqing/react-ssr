import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import zhCN from 'antd/es/locale/zh_CN';
import routes from '../routes';
import { createClientStore } from '../store';

const store = createClientStore();

export default () => (
  <ConfigProvider locale={zh_CN}>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);
