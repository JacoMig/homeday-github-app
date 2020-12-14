import React from 'react';
import {
    Switch,
    Route,
    
  } from "react-router-dom";

import Home from './components/views/Home'
import Search from './components/views/Search'
import Repo from './components/views/Repo'
import UserReposList from './components/views/Search/UserReposList'
import NotFound from './components/views/NotFound'
const Routes = () => {
    return (
        
        <Switch>
          <Route 
              exact 
              path="/" 
              render={routeProps =>
                <>
                  <Home history={routeProps.history} match={routeProps.match} />
                </>
              }
          />
          <Route 
              exact 
              path="/search/" 
              render={routeProps =>
                <Search history={routeProps.history} match={routeProps.match} />
              }
          />
          <Route 
              exact 
              path="/user/:user_name" 
              render={routeProps =>
                <UserReposList history={routeProps.history} match={routeProps.match} />
              }
          />
         <Route 
              exact 
              path="/user/:user_name/:repo_name" 
              render={routeProps =>
                <Repo history={routeProps.history} match={routeProps.match} />
              }
          /> 
         <Route path="*" component={NotFound} /> 
        </Switch>
    
    );
  }

  export default Routes