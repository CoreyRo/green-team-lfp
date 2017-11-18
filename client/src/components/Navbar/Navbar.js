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
            Brand
          </Link>
        </div>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
        {this.state.loggedIn === true ?
          <ul className='navbar-nav mr-auto'>
            <li className={window.location.pathname === '/' || window.location.pathname === '/Link1' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/'>Link 1</Link>
            </li>
            <li className={window.location.pathname === '/Link2' ? 'active nav-item' : 'nav-item'}>
              <Link className='nav-link' to='/Link2'>Link2</Link>
            </li>
            <li className={window.location.pathname === '/Logout' ? 'active nav-item' : 'nav-item'}>
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
