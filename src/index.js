import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App'
import Header from './components/Header';
import store from './store';
import { Provider } from 'react-redux';

/*The purpose of this file is to display the specified Router,Header and
  form data(from login, registration, add contact, dashboard) inside the specified HTML element("root")*/
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <App  />
      </div>
    </Router>
  </Provider>,
    document.getElementById('root')
)
