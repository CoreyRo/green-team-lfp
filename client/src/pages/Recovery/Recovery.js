import React, { Component } from 'react'
import ForgotForm from '../../components/ForgotPassForm'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import axios from "axios/index";

class Recovery extends Component {

    state = {
        email: ""
    }

    handleRedirect = (result) => {
        return window.location.replace("/myProfile/")

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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
                localStorage.setItem('loggedIn', true)
                this.handleRedirect(res)

            })
            .catch((err) => {
                console.log(err);
            })
    }


    render()
    {
    return (
      <div>
          <Navbar/>
          <Header/>
          <div className="container">
            <ForgotForm/>
          </div>
          <Footer/>
      </div>
    )
    }
}

export default Recovery