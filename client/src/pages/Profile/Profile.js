import React, { Component} from 'react'
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
        skills: []
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
                        <Col size="sm-4">
                            <div className="row">
                                <div className="col-sm-12">

                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <img className="img-fluid" style={{width: 150}} src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" /> 
                                            <h2> Joe Doe </h2>
                                            <button className="btn btn-sm btn-primary">Change Picture</button>
                                            <div class="stars">
                                                <form action="">
                                                    <input class="star star-5" id="star-5" type="radio" name="star"/>
                                                    <label class="star star-5" for="star-5"></label>
                                                    <input class="star star-4" id="star-4" type="radio" name="star"/>
                                                    <label class="star star-4" for="star-4"></label>
                                                    <input class="star star-3" id="star-3" type="radio" name="star"/>
                                                    <label class="star star-3" for="star-3"></label>
                                                    <input class="star star-2" id="star-2" type="radio" name="star"/>
                                                    <label class="star star-2" for="star-2"></label>
                                                    <input class="star star-1" id="star-1" type="radio" name="star"/>
                                                    <label class="star star-1" for="star-1"></label>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2> Skills </h2>
                                            <ul>
                                                <li>
                                                    <h4>Javascript</h4>
                                                </li>
                                                <li>
                                                    <h4>HTML</h4>
                                                </li>
                                                <li>
                                                    <h4>Python</h4>
                                                </li>
                                                <li>
                                                    <h4>Ruby</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col size="sm-2">
                        </Col>
                        <Col size="sm-6">
                        {this.renderPage()}
                            
                        </Col>
                    </div>
                
            </Container>
        )
    }

}

export default Profile