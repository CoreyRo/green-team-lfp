import React from "react"
import "./Login-form.css"
import { Link } from 'react-router-dom'
import { Container, Row } from '../../components/Grid';
import Alert from "../../components/Alert";

// import {Container, Col, Row} from "../Grid"

const LoginForm = props => {

    return (


    <div id="form-style">
    {props.state.errors === "" ? "" :
        <Row>
            <Alert state={props.state}/>
        </Row>
    }
        <form >
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="username" className="form-control-label">Email Address:</label>
                    <input type="email" value={props.email} className="form-control" name="email" id="email" onChange={props.handleInputChange} placeholder="Please enter your email" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-control-label">Password:</label>
                    <input type="password" value={props.password} className="form-control" name="password" id="password" onChange={props.handleInputChange} placeholder="Please enter your password" required/>
                </div>  
            </div>
            

            <button type="submit" className="btn login-btn" onClick={props.handleFormSubmit} id="login-submit">Sign-In</button>

            <Link type="submit" className="btn login-btn"  to="/sign-up" id="register-submit">Register</Link>

            <Link type="submit" className="btn login-btn" to="/user"  id="forgot-submit">Forgot Password?</Link>
        </form>

    </div>
    )
}


export default LoginForm