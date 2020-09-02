import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import Home from '../src/pages/home'
import Series from '../src/pages/series'
import Movies from '../src/pages/movies'
import Kids from '../src/pages/kids'
import Search from '../src/pages/search'
import Login from '../src/pages/login'
ReactDOM.render(
  <BrowserRouter>
     <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/series" component={Series} />
            <Route path="/movies" component={Movies} />
            <Route path="/kids" component={Kids} />
            <Route path="/Search/:search" component={Search} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
