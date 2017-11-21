import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import Pic from "../../components/pictures";
import './Splash.css';
import path from 'path'

class Splash extends Component {


    render() {
        return (
                <div>
                    <img src={Pic} alt="no Image found" className="img-fluid"/>
                    <a href="/sign-in" className="splash-btn">Sign In</a>
                </div>
        )
    }
}

export default Splash; 