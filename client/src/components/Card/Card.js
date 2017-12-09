import React from 'react'
import { Link  } from 'react-router-dom'
// import Button from "../Button"
import "./Card.css"

const Card = ({title, id, subtitle, text, handleFirstClick, 
               profile, project, firstText, secondText, 
               firstVal, secondVal}) =>
    <div className="card" id="main">
        <div className="card-block">
            <h4 className="card-title" id="header">{title}</h4>
            <h6 id="text" className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className="card-text">{text}</p>
            <Link to={"/profile/"+id} className="card-link button-color">
                {firstText}
            </Link>
            
        </div>
    </div>

export default Card