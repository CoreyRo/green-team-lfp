import React, { Component } from 'react';
import { Col } from "../../components/Grid";
import "./CreatePost.css";
import axios from 'axios';

class CreatePost extends Component {

    state = {
        title: "",
        members: "",
        description: "",
        skills: "",
        user: ""
    }

    componentDidMount() {
        axios.get("/api/user/myprofile/").then((res) => {
            this.setState({
                user: res.data._id
            })
            console.log("USER: ", this.state.user);
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
        console.log("STATE: " , this.state);
        console.log("form submit working");
        let arSkills = this.state.skills.split(",");
        console.log("Skills", arSkills);
        axios.post("/api/user/posts", {
            userId: this.state.user,
            title: this.state.title,
            skills: arSkills,
            description: this.state.description
        }).then((res) => {
            console.log("RES", res);

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
                                <input className="form-control" id="skillsDesired" name="skills" placeholder="Ex: javascript, node, react, etc.."  onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDetails">Project Details</label>
                                <textarea className="form-control" id="projectDetails" rows="3" name="description" onChange={this.handleInputChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Project Logo (optional)</label>
                                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                <small id="fileHelp" className="form-text text-muted">Enter in a company logo or picture if desired this will display with your project</small>
                            </div>

                            <button type="submit" className="btn btn-primary post-submit" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </Col>
            </div>

        )
    }

}

export default CreatePost;