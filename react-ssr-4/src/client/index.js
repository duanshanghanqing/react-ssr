import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../containers/Home';

// render(<Home></Home>, document.getElementById('app'));
hydrate(<Home></Home>, document.getElementById('app')); // ssr时使用该方法
