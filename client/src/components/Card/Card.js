import React from 'react'
import { Link  } from 'react-router-dom'
import Button from "../Button"
import "./Card.css"

const Card = ({title, subtitle, text, handleFirstClick, 
               link, firstText, secondText,
               firstVal, secondVal}) =>
    <div className="card" id="main">
        <div className="card-block">
            <h4 className="card-title" id="header">{title}</h4>
            <h6 id="text" className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className="card-text">{text}</p>
            <Button onClick={handleFirstClick} className="card-link button-color" type="primary">
                {firstText}
            </Button>
            <Link to={"/profile/"+link} className="card-link button-color" type="primary">
                {secondText}
            </Link>
        </div>
    </div>

export default Card