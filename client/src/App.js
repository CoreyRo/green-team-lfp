import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
          <Router>
            <Wrapper>
              <Navbar />
              <Route exact path="/Profile" component={Profile} />
            </Wrapper>
          </Router>
        
    );
  }
}

export default App;
