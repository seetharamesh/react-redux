import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App'
import Header from './components/Header';

ReactDOM.render(
    <Router>
      <div>
        <Header />
        <App  />
      </div>
    </Router>,
    document.getElementById('root')
)
