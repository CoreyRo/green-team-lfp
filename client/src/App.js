import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
          <Router>
            <Wrapper>
              <Navbar />
              <Header />
              <Route exact path="/Profile" component={Profile} />
              <Footer />
            </Wrapper>           
          </Router>
        
    );
  }
}

export default App;
