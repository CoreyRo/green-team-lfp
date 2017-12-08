import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount(){
    let loggedIn = localStorage.getItem("loggedIn")
    if(loggedIn){
      this.setState({
        loggedIn: true
      })
    }
    else{
      this.setState({
        loggedIn: false
      })
    }
  }

  render(){
  return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <div className='navbar-header'>
          <Link className='navbar-brand' to='/'>
            Project LFP
          </Link>
        </div>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
        {this.state.loggedIn === true ?
          <ul className='navbar-nav mr-auto'>
            <li className={window.location.pathname === '/myProfile/' || window.location.pathname === '/myProfile' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/myProfile'>My Profile</Link>
            </li>
            <li className={window.location.pathname === '/browse/' || window.location.pathname === '/browse' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/browse'>Browse</Link>
            </li>
            <li className={window.location.pathname === '/inbox/' || window.location.pathname === '/inbox' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/inbox'>Inbox</Link>
            </li>
            <li className={window.location.pathname === '/Logout/' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/Logout'>Logout</Link>
            </li>
          </ul>
          : "" }
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
