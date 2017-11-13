import React, { Component } from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Jumbotron from '../../components/Jumbotron'
import ProfileEdit from '../../components/ProfileEdit'
import MyInfo from '../../components/MyInfo'
import ProfileCard from '../../components/ProfileCard'
import Skills from '../../components/Skills'
import './Profile.css'
import axios from 'axios'


class Profile extends Component {
    state = {
        id: "",
        about:"",
        displayName: "",
        firstName: "",
        lastName:"",
        pic: "",
        edit: false,
        skillInput: "",
        projects: ["Pulled", "From", "Database"],        
        joined: ["Pulled", "From", "Database"],   
        skills: ["Javascript", "HTML"]
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        console.log("PROFILE DIDMOUNT")
        let id = localStorage.getItem("id");
        axios.get('/api/user/profile/' + id)
        .then(res => {
            console.log("PROFILE RES:", res)
            let data = res.data
            this.setState({
                displayName: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                id: data._id,
                skills: data.skills,
                joined: data.joined,
                projects: data.projects

            })

        })
        .catch(err => console.log("PROFILE DIDMOUNT err",err))
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            About: this.state.about || null,
            pic: this.state.pic || null,
            displayName: this.state.displayName || "Enter Name",
            projects: this.state.projects || null,
            joined: this.state.joined || null,
            pic: this.state.pic || null,
            skills: this.state.skills || null,
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