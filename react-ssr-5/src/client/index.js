import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(<App />, document.getElementById('app')); // ssr时使用该方法
