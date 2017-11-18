import React, { Component } from 'react';
import { BrowserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile'
import Browse from './pages/Browse'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignIn from "./components/Login-form"

class App extends Component {
  render() {
    return (
          <Router>
            <Wrapper>
              <Navbar />
              <Header />
              <Route path="/profile/" component={Profile} />
              <Route exact path="/browse" component = {Browse} />
              <Route exact path="/sign-up" component= {Login} />
              <Route exact path="/sign-in" component= {SignIn} />
              <Footer />
            </Wrapper>           
          </Router>
        
    );
  }
}

export default App;