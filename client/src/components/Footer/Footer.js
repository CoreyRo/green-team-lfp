import React from 'react'
import {Link} from 'react-router-dom'

import { Col, Container, Row } from '../Grid'
import './Footer.css'
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = props =>{
	return (
			<footer className="footer col-sm-12">
				<Row>
						<div className="footerTop col-sm-12">
						<Row>
							<div className="col-sm-6">
							<h3> Subscribe to our mailer </h3>
							</div>

							<div className="col-sm-6">
								<form>
									<div className="form-group">
									<label htmlFor="mailerReg" className="form-control-label" />
									<input type="password" value={props.password} className="form-control" name="password" id="password" onChange={props.handleInputChange} placeholder="Password" required />
									</div>
									<button type="submit" className="btn" onClick={props.handleFormSubmit} id="login-submit">
									Sign-Up
									</button>
								</form>
							</div>
						</Row>
						</div>
				</Row>

				
				<Row>
					<div className="footerBot">footer bot</div>
				</Row>
			</footer>
)
}

export default Footer