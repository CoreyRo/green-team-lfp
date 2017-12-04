import React, { Component } from 'react'
import './ForgotPassForm.css'

class ForgotForm extends Component {

    render() {
        return (
            <div id="forgot-form">
                <h1 id='forgot-title'>Forgot Username/Password Form</h1>
                <form id="register-form">
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="email" className="form-control-label">Email:</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="someone@gmail.com" onChange={this.handleInputChange} required/>
                        </div>
                    </div>


                    <input type="submit" className="btn btn-primary" id="registerSubmit" value="Send Email" onClick={this.handleFormSubmit}/>

                </form>
            </div>
        )
    }

}

export default ForgotForm
