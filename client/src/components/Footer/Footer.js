import React from 'react'
import {Link} from 'react-router-dom'

import { Col, Container, Row } from '../Grid'
import './Footer.css'
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Footer = props =>{
	return (
		<div>
			<div className="footer-div"></div>
		<footer className="footer">
			<div className="footerTop">
			<Row>
			<Col size="sm-1" />
			<Col size="sm-2">
				<Row>
					<img src="http://starcolon.com/IMG/github-white.png" className="" style={{height: 35}} />
					<img src="http://starcolon.com/IMG/github-white.png" className="" style={{height: 35}} />
					<img src="http://starcolon.com/IMG/github-white.png" className="" style={{height: 35}} />
				</Row>
			</Col>
			<Col size="sm-6">
				<Row>
					<div className="col-sm-12 mx-auto text-center footer-nav">
						<span className={window.location.pathname === '/Profile' ? 'active footer-item' : 'footer-item'}>
							<Link className='footer-link' to='/Profile'>Profile</Link>{` | `}
						</span>
						<span className={window.location.pathname === '/Link2' ? 'active footer-item' : 'footer-item'}>
							<Link className='footer-link' to='/Link2'>Link2</Link>{` | `}
						</span>
						<span className={window.location.pathname === '/Link3' ? 'active footer-item' : 'footer-item'}>
							<Link className='footer-link' to='/Link3'>Link3</Link>{` | `}
						</span>
						<span className={window.location.pathname === '/Link4' ? 'active footer-item' : 'footer-item'}>
							<Link className='footer-link' to='/Link4'>Link4</Link>
						</span>
					</div>

				</Row>
			</Col>
		</Row>
	</div>
			
		</footer>
		</div>
)
}

export default Footer
