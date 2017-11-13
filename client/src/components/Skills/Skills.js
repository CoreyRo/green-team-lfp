import React from 'react'
import './Skills.css'
// import { Col, Container, Row } from '../Grid'


const Skills = props => {
    return(
        <div className="col-sm-12 profileAboutDiv">
        <h2 style={{borderBottom: "4px solid #FFF", marginTop: "4rem"}}> Skills </h2>
        <div className="row">
            {props.state.edit === true ? props.state.skills.map((skill,i) =>{
                return(
                        
                    <span key={i} onClick={props.removeSkill} id={"skill"+i} className="skillPillEdit">X {skill}</span>
)
            }): props.state.skills.map((skill,i) =>{
                return(

                    <span key={i} className="skillPill">{skill}</span>
)
            }) }
        </div>
    </div>
    )
}
export default Skills