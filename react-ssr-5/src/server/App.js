import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import routers from '../routers';

export default (req) => (
    <StaticRouter location={req.url} context={{}}>
        <div>
            {
                routers.map((item, index) => {
                    return <Route {...item} key={index}></Route>
                })
            }
        </div>
    </StaticRouter>
);
