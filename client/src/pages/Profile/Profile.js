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
        projectInput: "",
        joinedInput: "",
        skillInput: "",
        projects: [],        
        joined: [],   
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
            if(this.state.projectInput){
                console.log("projectInput", this.state.projectInput)
                this.state.projects.push(this.state.projectInput)
            }
            else if(this.state.joinedInput){
                console.log("joinedInput", this.state.joinedInput)
                this.state.joined.push(this.state.joinedInput)
            }
            else if(this.state.skillInput){
                console.log("skillInput", this.state.skillInput)
                this.state.skills.push(this.state.skillInput)
            }
            this.setState({
                projects: this.state.projects,
                joined: this.state.joined,
                skills: this.state.skills,
                projectInput: "",
                joinedInput: "",
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
                        
                            <Col size="sm-3">
                                <div className="row infoContainer">

                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="text-center profileAboutDiv">
                                                    <img className="img-fluid" style={{width: 150}} src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" /> 
                                                    <h2> Joe Doe </h2>
                                                    <button className="btn btn-sm btn-primary">Change Picture</button>
                                                    <button className="btn btn-sm btn-primary" onClick={this.editPage}>Edit Profile</button>
                                                </div>
                                            </div>
                                        </div>
   
                                        <div className="row">
                                            <div className="col-sm-12 profileAboutDiv">
                                                <h2> Skills </h2>
                                                <ul>
                                                    {this.state.edit === true ? this.state.skills.map((skill,i) =>{
                                                        return(
                                                        <li key={i}>
                                                            <span>{skill}</span> <span onClick={this.removeSkill}id={"skill"+i}>[x]</span>
                                                        </li>)
                                                    }): this.state.skills.map((skill,i) =>{
                                                        return(
                                                        <li key={i}>
                                                            <span>{skill}</span>
                                                        </li>)
                                                    }) }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col size="sm-1">
                            </Col>
                            <Col size="sm-7">
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