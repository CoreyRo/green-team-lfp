import React, { Component } from 'react'
import ForgotForm from '../../components/ForgotPassForm'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from "../../components/Footer"
import axios from "axios/index"

class Recovery extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            email: ""
        }
    }

    handleRedirect = (result) =>
    {
        return window.location.replace("/")

    }

    handleInputChange = event =>
    {
        const { name, value } = event.target
        this.setState(
        {
            [name]: value
        })
    }

    handleFormSubmit = event =>
    {
        event.preventDefault()
        axios.post('/api/recovery/send-email',
        {
            email: this.state.email
        })
        .then((res) =>
        {
            this.handleRedirect(res)
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }


    render()
    {
    return (
      <div>
          <Navbar/>
          <Header/>
          <div className="container">
            <ForgotForm handleSubmit={this.handleFormSubmit} handleChange={this.handleInputChange}/>
          </div>
          <Footer/>
      </div>
    )
    }
}

export default Recovery