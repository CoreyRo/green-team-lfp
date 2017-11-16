import React from 'react'
import Button from "../Button"
import "./Card.css"

const Card = ({title, subtitle, text, handleFirstClick, 
               handleSecondClick, firstText, secondText,
               firstVal, secondVal}) =>
    <div className="card" id="main">
        <div className="card-block">
            <h4 className="card-title" id="header">{title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className="card-text">{text}</p>
            <Button onClick={handleFirstClick} className="card-link button-color" type="primary">
                {firstText}
            </Button>
            <Button onClick={handleFirstClick} className="card-link button-color" type="primary">
                {secondText}
            </Button>
        </div>
    </div>

export default Card