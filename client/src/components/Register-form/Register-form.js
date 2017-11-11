import React from "react"
import "./Register-form.css"
import {Container, Col, Row} from "../Grid"

const RegisterForm = props =>
    <div id="form-style">

        <form method="POST" action="/sign-up">

        <div className="form-group">

            <div className="form-group">
                <label htmlFor="firstName" className="form-control-label">First Name:</label>
                <input type="text" value={props.name} onChange={props.handleChange} className="form-control"
                name="first" placeholder="First Name" required/>
            </div>  

            <div className="form-group">
                <label htmlFor="lastName" className="form-control-label">Last Name:</label>
                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required/>
            </div>  

            <div className="form-group">
                <label htmlFor="email" className="form-control-label">Email:</label>
                <input type="text" className="form-control" name="email" id="email" placeholder="Email" required/>
            </div>

            <div className="form-group">
                <label htmlFor="username" className="form-control-label">Username:</label>
                <input type="text" className="form-control" name="username" id="username" placeholder="Username" required/>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="form-control-label">Password:</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" required/>
            </div>

            <div className="form-group">
                <label htmlFor="location" className="form-control-label">Location:</label>
                <input type="text" className="form-control" name="location" id="location" placeholder="Irvine, CA" required/>
            </div>    

        </div>
        

        <input type="submit" className="btn btn-primary" id="registerSubmit" value="Sign Up" onClick={props.handleNewUser} id="submit"/>

        </form>

    </div>


export default RegisterForm