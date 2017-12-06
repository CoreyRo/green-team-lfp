import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import ViewProfile from "./pages/ViewProfile";
import Browse from './pages/Browse';
import Wrapper from './components/Wrapper';
import Login from './pages/Login';
import SignIn from "./pages/Sign-In";
import Splash from "./pages/Splash";
import Logout from "./components/Logout";
import Project from "./pages/Project-View";
import { create } from 'domain';
import Recovery from './pages/Recovery'
import UploadImg from "./components/UploadImg";

class App extends Component {
  render() {
    return <Router>
        <Wrapper>
          <Route exact path="/" component={Splash} />
          <Route path="/myProfile/" component={Profile} />
          <Route exact path="/myProfile/uploadImage" component={UploadImg} />
          <Route path="/profile/" component={ViewProfile} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/sign-up" component={Login} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/recovery" component={Recovery} />
          <Route exact path="/project-view" component={Project} />
        </Wrapper>
      </Router>;
  }
}

export default App;