import React from 'react';
import {Layout} from './layout.js';
import createBrowserHistory from 'history/createBrowserHistory'
import {Router, Route} from 'react-router';

const newHistory = createBrowserHistory();
export const Routes = () => {

    return(
      <Router history={newHistory}>
        <div>
          <Route path='/' component={Layout}/>
        </div>

      </Router>
    );

}
