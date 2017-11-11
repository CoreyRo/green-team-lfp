import React, { Component } from 'react';
<<<<<<< HEAD
import Browse from "./pages/Browse"
import LoginRegisterForm from "./components/Login-Register"
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
>>>>>>> master
import './App.css';
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
          <Router>
            <Wrapper>
              <Navbar />
              <Header />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/sign-up" component= {Login} />
              <Footer />
            </Wrapper>           
          </Router>
        
    );
  }
}

export default App;