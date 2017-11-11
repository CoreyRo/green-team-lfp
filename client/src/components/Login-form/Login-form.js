import React from "react"
import "./Login-form.css"
import {Container, Col, Row} from "../Grid"

const LoginForm = props =>
    <div id="form-style">

        <form method="POST" action="/sign-up">

        <div className="form-group">
            <div className="form-group">
                <label htmlFor="username" className="form-control-label">Username:</label>
                <input type="text" className="form-control" name="username" id="username" placeholder="Username" required/>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="form-control-label">Password:</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" required/>
            </div>  
        </div>
        

        <input type="submit" className="btn btn-primary" id="registerSubmit" value="Sign Up" onClick={props.handleNewUser} id="submit"/>

        </form>

    </div>


export default LoginForm