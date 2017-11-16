import React, { Component } from 'react';
import { Row, Container } from "../../components/Grid";
import axios from 'axios';
import "./Login.css";


class Login extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        errors: ""
    }

    handleRedirect = (result) => {
        let id = result.data._id
        return window.location.replace("/profile/" + id)
                    
    }

    handleFormSubmit = event => {
        this.setState({ errors: {} });
        event.preventDefault();
        console.log("STATE", this.state);
        axios.post('/api/user/sign-up', 
        { 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email, 
            username: this.state.username, 
            password: this.state.password
        })
        .then((res) => {
            console.log("RES", res)
            localStorage.setItem('id', res.data._id)
<<<<<<< HEAD
            this.handleRedirect(res)``
=======
            localStorage.setItem('loggedIn', true)
            this.handleRedirect(res)
>>>>>>> b31a7596974e1a37e631a8e7838629633b864dcc
            
        })
        .catch((err) => {
            console.log(err);
        })
    }

    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render() {
        const { errors } = this.state;
        return (
            <Container fluid>
                <Row>
                <div className="col-md-6" id="registerCard">
                    <div className="card">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    {this.state.newUser === true ? <login /> : <signUp />}
                    <div className="card-body">
                        <form id="register-form">
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-control-label">First Name:</label>
                                <input type="text" className="form-control" name="firstName" id="firstName" onChange={this.handleInputChange} placeholder="First Name" required/>
                            </div>  

                            <div className="form-group">
                                <label htmlFor="lastName" className="form-control-label">Last Name:</label>
                                <input type="text" className="form-control" name="lastName" id="lastName" onChange={this.handleInputChange} placeholder="Last Name" required/>
                            </div>  

                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">Email:</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={this.handleInputChange} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="username" className="form-control-label">Username:</label>
                                <input type="text" className="form-control" name="username" id="username" placeholder="Username" onChange={this.handleInputChange} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">Password:</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.handleInputChange} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="location" className="form-control-label">Location:</label>
                                <input type="text" className="form-control" name="location" id="location" placeholder="Irvine, CA" onChange={this.handleInputChange} required/>
                            </div>    

                        </div>
                        

                        <input type="submit" className="btn btn-primary" id="registerSubmit" value="Sign Up" onClick={this.handleFormSubmit}/>

                        </form>

                    </div>
                    </div>
                </div>
                </Row>
            </Container>
        )
    }


}

export default Login;