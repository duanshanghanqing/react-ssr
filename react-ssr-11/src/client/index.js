import React from 'react';
import { hydrate } from 'react-dom';
import Root from './root';

hydrate(<Root />, document.getElementById('root')); // ssr时使用该方法
