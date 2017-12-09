import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Pic from "../../components/pictures";
import './Splash.css';
// import path from 'path'

class Splash extends Component {

   

    render() {
        console.log(localStorage.getItem("loggedIn"))
        return (
                <div className=''>
                    <img src={Pic} alt="project-lfp" className="img-fluid"/>
                <div className="splash-btn">
                    <Link to={ localStorage.getItem("loggedIn") ? `/myProfile` : `/sign-in`} >
                    <i className="fa fa-3x fa-user btn-icon" aria-hidden="true"></i>
                    </Link>
                    </div>
                </div>
        )
    }
}

export default Splash; 