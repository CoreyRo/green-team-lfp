import React, { Component, update} from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Jumbotron from '../../components/Jumbotron'
import ProfileEdit from '../../components/ProfileEdit'
import MyInfo from '../../components/MyInfo'
import ProfileCard from '../../components/ProfileCard'
import Skills from '../../components/Skills'
import './Profile.css'


class Profile extends Component {
    state = {
        about:"",
        displayName: "",
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
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
                            <Row>
                            
                                <Col size="sm-5">
                                    <div className="row infoContainer">
                                        <Col size="sm-12">
                                            <ProfileCard state={this.state} editPage={this.editPage} />
    
                                            <Row>
                                                <Skills state={this.state} removeSkill={this.removeSkill} />
                                            </Row>
                                        </Col>
                                        
                                    </div>
                                </Col>
                                <Col size="sm-1">
                                </Col>
                                <Col size="sm-6">
                                {this.renderPage()}
                                    
                                </Col>
                            </Row>
                            </Col>
                    </div>
            </Container>
        )
    }

}

export default Profile