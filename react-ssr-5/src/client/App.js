import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routers from '../routers';

export default () => (
    <BrowserRouter>
        <div>
            {
                routers.map((item, index) => {
                    return <Route {...item} key={index}></Route>
                })
            }
        </div>
    </BrowserRouter>
);
