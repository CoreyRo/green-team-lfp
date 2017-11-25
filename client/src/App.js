import React, { Component } from 'react';
import { BrowserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignIn from "./pages/Sign-In";
import Splash from "./pages/Splash";
import Logout from "./components/Logout";

import reducers from "./store";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Router>
            <Wrapper>
              <Route exact path="/" component={Splash} />
              <Route path="/profile/" component={Profile} />
              <Route exact path="/browse" component = {Browse} />
              <Route exact path="/sign-up" component= {Login} />
              <Route exact path="/sign-in" component= {SignIn} />
              <Route exact path="/Logout" component={Logout} />
            </Wrapper>           
          </Router>
        </Provider>
        
    );
  }
}

export default App;