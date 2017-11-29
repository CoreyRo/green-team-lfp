import React, { Component } from 'react';
import { BrowserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import viewProfile from "./pages/viewProfile";
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignIn from "./pages/Sign-In";
import Splash from "./pages/Splash";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return <Router>
        <Wrapper>
          <Route exact path="/" component={Splash} />
          <Route exact path="/myProfile/" component={Profile} />
          <Route path="/profile/" component={viewProfile} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/sign-up" component={Login} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/Logout" component={Logout} />
        </Wrapper>
      </Router>;
  }
}

export default App;