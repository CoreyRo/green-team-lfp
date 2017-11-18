import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import Login from "../../components/Login-form";
import axios from 'axios';
import './Login-In.css';

class SignIn extends Component {

    state = {
        username = "",
        password = ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    handleNewUser = event => {
        event.preventDefault();
        return window.location("/sign-up");
    }

    handleFormSubmit = event => {
        console.log("In handle form submit")
        event.preventDefault();
        axios.post("/api/user/sign-in", {
            username: this.state.username,
            password: this.state.password
        })
        .then((res) => {
            console.log("SIgn-IN RESSSSS", res)
            localStorage.setItem('id', res.data._id)
            localStorage.setItem('loggedIn', true)
        })
        .catch((err) => {
            console.log(err);
        })
    }





    render() {
        return (
            <Container>
    


    <div id="form-style">

        <form >
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="username" className="form-control-label">Username:</label>
                    <input type="text" value={this.state.username} className="form-control" name="username" id="username" onChange={this.handleInputChange} placeholder="Username" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-control-label">Password:</label>
                    <input type="password" value={this.state.password} className="form-control" name="password" id="password" onChange={this.handleInputChange} placeholder="Password" required/>
                </div>  
            </div>
            

            <button type="submit" className="btn" onClick={this.handleFormSubmit} id="login-submit">Sign-In</button>

            <a type="submit" className="btn"  href="/sign-up" id="register-submit">Register</a>
        </form>

    </div>
            </Container>
        )
    }
}

export default SignIn; 