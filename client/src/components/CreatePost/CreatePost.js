import React, { Component } from 'react';
import { Col } from "../../components/Grid";
import "./CreatePost.css";
import axios from 'axios';

class CreatePost extends Component {

    state = {
        id: "",
        firstName: "",
        lastName: "",
        about:"",
        username: "",
        displayName: "",
        email: "",
        imageURL: "",
        projects: [],        
        joined: [],   
        userskills: [],
        title: "",
        members: "",
        description: "",
        desiredSkills: "",
        userId: ""
    }

    componentDidMount() {
        axios.get("/api/user/myprofile/").then((res) => {
            this.setState({
                id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                about: res.data.about,
                username: res.data.username,
                displayName: res.data.displayName,
                email: res.data.email,
                imageURL: res.data.imageURL,
                projects: res.data.projects,        
                joined: res.data.joined,   
                userskills: res.data.skills,
                userId: res.data._id
            })
        })

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let arSkills = this.state.desiredSkills.split(",");
        let length = arSkills.length;
        for(var i = 0; i < length; i++) {
            arSkills[i] = arSkills[i].trim();
        }

        axios.post("/api/user/posts", {
            userId: this.state.userId,
            title: this.state.title,
            author: this.state.username,
            members: this.state.members,
            desiredSkills: arSkills,
            description: this.state.description
        }).then((res) => {
            console.log("HERE");
            this.state.projects.push(res.data._id);
            this.setState({
                projects: this.state.projects
            })
            
            axios.post("/api/user/myProfile/", {
                about: this.state.about,
                displayName: this.state.displayName,
                email: this.state.email,
                projects: this.state.projects,
                joined: this.state.joined,
                imageURL: this.state.imageURL,
                skills: this.state.skills,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            })
            .then((res) => {
                window.location.reload();
            })
               
            .catch(err => console.log(err))

        })

    }

    render() {
        return (
            <div>
                    <Col size="md-12 post-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="projectTitle">Project Title</label>
                                <input type="text" className="form-control" name="title" id="projectTitle" onChange={this.handleInputChange} placeholder="Enter Project Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="memberSelect">Members Needed</label>
                                <select className="form-control" name="members" id="memberSelect"  onChange={this.handleInputChange} required>
                                <option defaultValue>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skillsDesired">Skills Desired (Seperate with a comma)</label>
                                <input className="form-control" id="skillsDesired" name="desiredSkills" placeholder="Ex: javascript, node, react, etc.."  onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDetails">Project Details</label>
                                <textarea className="form-control" id="projectDetails" rows="3" name="description" onChange={this.handleInputChange} ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary post-submit" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </Col>
            </div>

        )
    }

}

export default CreatePost;