import React, { Component, update} from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Jumbotron from '../../components/Jumbotron'
import ProfileEdit from '../../components/ProfileEdit'
import MyInfo from '../../components/MyInfo'
import './Profile.css'


class Profile extends Component {
    state = {
        about:"",
        pic: "",
        stars: "",
        edit: false,
        skillInput: "",
        projects: ["Pulled", "From", "Database"],        
        joined: ["Pulled", "From", "Database"],   
        skills: ["Javascript", "HTML"]
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            About: this.state.about || null,
            projects: this.state.projects || null,
            joined: this.state.joined || null,
            pic: this.state.pic || null,
            skills: this.state.skills || null,
            stars: this.state.stars  || null,
            edit: true
        })
    }

    handleInputChange = event => {
        let value =  event.target.value
        let name = event.target.name

        this.setState({
            [name] :value
        })

    }

    handleArraySubmit = event => {
        event.preventDefault()
        this.state.skills.push(this.state.skillInput)
        this.setState({
            skills: this.state.skills,
            skillInput: ""
        })
        console.log("ARRAY SUBMIT STATE", this.state)
    }

    editPage = event => {
        event.preventDefault()
        this.setState({
            edit: !this.state.edit 
        })
        console.log(this.state)
    }

    removeSkill = event => {
        this.state.skills.splice("skill" + event.target.id, 1)
        this.setState({
            skills: this.state.skills
          })
    }

    renderPage = () => {
        if(this.state.edit){
            return <ProfileEdit props={this.state} handleArraySubmit={this.handleArraySubmit} handleArrayInput={this.handleArrayInput} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} editPage={this.editPage}/>
        }
        else if(!this.state.edit){
            
            return <MyInfo props={this.state} editPage={this.editPage} />
        }
    }

    render(){
        return(
            <Container>
                    
                    <div className="row jumbotron d-flex">
                        <div className="row mx-auto profileHead">
                            <div className="col-sm-12">
                        <h1 className="text-center mx-auto profileHeadText"> PROFILE </h1>
                            </div>
                        </div>
                    <Col size="sm-12">
                        <div className="row">
                        
                            <Col size="sm-5">
                                <div className="row infoContainer">

                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="text-center profileAboutDiv">
                                                            <img className="img-fluid" style={{width: 150}} src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" /> 
                                                        </div>
                                                        <div className="row text-center mx-auto">
                                                            <h2 className="text-center mx-auto"> John Doe </h2>
                                                        </div>
                                                        <div className="row">
                                                            <span className="text-center mx-auto"> johndoe@email.com </span>
                                                        </div>
                                                        <div className="row text-center mx-auto">
                                                            <button className="text-center mx-auto btn btn-sm btn-primary">Change Picture</button>
                                                        </div>
                                                        <div className="row text-center mx-auto">
                                                            <button className="text-center mx-auto btn btn-sm btn-primary" onClick={this.editPage}>Edit Profile</button>
                                                        </div>                                                           
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
   
                                        <div className="row">
                                            <div className="col-sm-12 profileAboutDiv">
                                                <h2 style={{borderBottom: "4px solid #FFF", marginTop: "4rem"}}> Skills </h2>
                                                <div className="row">
                                                    {this.state.edit === true ? this.state.skills.map((skill,i) =>{
                                                        return(

                                                            <div><span key={i}>{skill}</span> <span onClick={this.removeSkill}id={"skill"+i}>[x]</span></div>
)
                                                    }): this.state.skills.map((skill,i) =>{
                                                        return(

                                                            <span key={i} className="skillPill">{skill}</span>
)
                                                    }) }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col size="sm-1">
                            </Col>
                            <Col size="sm-6">
                            {this.renderPage()}
                                
                            </Col>
                        </div>
                        </Col>
                    </div>
                
            </Container>
        )
    }

}

export default Profile