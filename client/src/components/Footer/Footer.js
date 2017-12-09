import React, { Component } from 'react'
import { Row } from '../Grid'
import axios from 'axios'
import './Footer.css'
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Footer extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            regEmail: ''
        }
    }

    handleInputChange = (event) =>
    {
        const { name, value } = event.target
        this.setState(
        {
            [name]: value
        })
    }

    handleSubmit = (event) =>
    {
        event.preventDefault()

        axios.post('/api/mailer/join-mailer', { newUser: this.state.regEmail })
        .then(res => console.log("submit ", res))

        this.setState({ regEmail: '' })
    }

    render()
    {
        return <footer className="footer col-sm-12">
            <Row>
                <div className="footerTop col-sm-12">
                    <form className="form-inline">
                        <div className="form-group mx-auto">
                            <label htmlFor="regEmail" id="regEmailLabel" className="form-control-label">
                                Subscribe to our mailer
                            </label>
                            <input type="email" value={this.state.regEmail} className="form-control" name="regEmail" id="regEmail"
                                   onChange={this.handleInputChange} placeholder="enter your email" required />
                            <button type="submit" className="btn" onClick={this.handleSubmit} id="regEmail-submit">
                                Sign-Up
                            </button>
                        </div>
                    </form>
                </div>
            </Row>

            <Row>
                <div className="footerBot text-center mx-auto">
                    <p id="appCreators">Creators of Project LFP</p>
                    <a href="https://github.com/JakeGreer" rel="noopener noreferrer" target="_blank">
            <span className="githubLink" id="jake">
              <img className="githubIcon" alt="github logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" />
              Jake Greer
            </span>
                    </a>

                    <a href="https://github.com/coreyro" rel="noopener noreferrer" target="_blank">
            <span className="githubLink" id="jake">
              <img className="githubIcon" alt="github logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" />
              Corey Rodems
            </span>
                    </a>

                    <a href="https://github.com/theRealScoobaSteve" rel="noopener noreferrer" target="_blank">
            <span className="githubLink" id="jake">
              <img className="githubIcon" alt="github logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png" />
              Stephen Simone
            </span>
                    </a>
                </div>
            </Row>
        </footer>
    }


}

export default Footer