import React from "react"
import "./Login-form.css"
import {Container, Col, Row} from "../Grid"

const LoginForm = ({username, pass, handleNewUser, handleFormSubmit}) =>
    <div id="form-style">

        <form method="POST" action="/sign-up">

        <div className="form-group">
            <div className="form-group">
                <label htmlFor="username" className="form-control-label">Username:</label>
                <input type="text" value={username} className="form-control" name="username" id="username" placeholder="Username" required/>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="form-control-label">Password:</label>
                <input type="password" value={pass} className="form-control" name="password" id="password" placeholder="Password" required/>
            </div>  
        </div>
        

        <input type="submit" className="btn btn-primary" value="Sign In" onClick={handleFormSubmit} id="login-submit"/>
        <input type="submit" className="btn btn-primary"  href="/sign-up" value="Register" onClick={handleNewUser} id="register-submit"/>
        </form>

    </div>


export default LoginForm