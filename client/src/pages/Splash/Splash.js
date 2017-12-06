import React, { Component } from 'react';
// import { Col, Container, Row } from '../../components/Grid';
import Pic from "../../components/pictures";
import './Splash.css';
// import path from 'path'

class Splash extends Component {


    render() {
        return (
                <div>
                    <img src={Pic} alt="project-lfp" className="img-fluid"/>
                    <div className="splash-btn">
                        <a href="/sign-in">
                            <i className="fa fa-3x fa-user btn-icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
        )
    }
}

export default Splash; 