import React from 'react'
import Button from "../Button"

const Card = ({title, subtitle, text, handleFirstClick, 
               handleSecondClick, firstText, secondText,
               firstVal, secondVal}) =>
    <div class="card" id="main">
        <div class="card-block">
            <h4 class="card-title">{title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p class="card-text">{text}</p>
            <Button onClick={handleFirstClick} value={firstVal} class="card-link">
                {firstText}
            </Button>
            <Button onClick={handleFirstClick} value={secondVal} class="card-link">
                {secondText}
            </Button>
        </div>
    </div>