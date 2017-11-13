import React from 'react'
import Button from "../Button"
import "./Card.css"

const Card = ({title, subtitle, text, handleFirstClick, 
               handleSecondClick, firstText, secondText,
               firstVal, secondVal}) =>
    <div class="card" id="main">
        <div class="card-block">
            <h4 class="card-title" id="header">{title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p class="card-text">{text}</p>
            <Button onClick={handleFirstClick} className="card-link button-color" type="primary">
                {firstText}
            </Button>
            <Button onClick={handleFirstClick} className="card-link button-color" type="primary">
                {secondText}
            </Button>
        </div>
    </div>

export default Card