import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './cars/Dashboard'; // added
import { Provider } from 'react-redux'; // added
import store from '../store'; // added
import Header from './layouts/header'; // added
import { Router, Route, Switch } from 'react-router-dom'; // added
import history from '../history'; // added
import carDelete from './cars/carDelete'; // added
import carEdit from './cars/carEdit'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={carDelete} />
            <Route exact path='/edit/:id' component={carEdit} /> // added

          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));