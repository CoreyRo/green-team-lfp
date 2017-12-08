import React, { Component } from 'react';
import { Container, Row } from '../../components/Grid';
import Alert from "../../components/Alert";
import Header from '../../components/Header';
import Navbar from "../../components/Navbar";
import Login from "../../components/Login-form";
import Footer from "../../components/Footer";
import axios from 'axios';
import './Sign-In.css';


class SignIn extends Component {

    state = {
        email: "",
        password: "",
        errors: ''
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.post("/api/user/sign-in", {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            localStorage.setItem('id', res.data._id)
            localStorage.setItem('loggedIn', true)
            window.location.replace("/myProfile/", res);
        })
        .catch((err) => {
            console.log("sign-in err",err);
            let error = "Invalid email or password"        
            this.setState({errors: error})
        })
    }

    


    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Container>
                    <Login
                    state={this.state}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    />
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default SignIn; 