import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./CreatePost.css";
import axios from 'axios';

class CreatePost extends Component {

    state = {
        title: "",
        members: "",
        description: "",
        skills: "",
        user: []
    }

    componentDidMount() {
        axios.get("/api/user/current").then((res) => {
            this.state.user = res;
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
        console.log(this.state);
        console.log("form submit working");
        let arSkills = this.state.skills.split(",");
        axios.post("/api/user/posts", {
            userId: this.state.user.data._id,
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
            <Navbar />
            <Header />
            <Container>

                <Row>
                    <Col size="md-12 post-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="projectTitle">Project Title</label>
                                <input type="text" className="form-control" name="title" id="projectTitle" onChange={this.state.handleInputChange} placeholder="Enter Project Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="memberSelect">Members Needed</label>
                                <select className="form-control" name="members" id="memberSelect"  onChange={this.state.handleInputChange} required>
                                <option disabled selected>...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skillsDesired">Skills Desired (Seperate with a comma)</label>
                                <input className="form-control" id="skillsDesired" name="skills" placeholder="Ex: javascript, node, react, etc.."  onChange={this.state.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDetails">Project Details</label>
                                <textarea className="form-control" id="projectDetails" rows="3" name="description" onChange={this.state.handleInputChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Project Logo (optional)</label>
                                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                <small id="fileHelp" className="form-text text-muted">Enter in a company logo or picture if desired this will display with your project</small>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </div>

        )
    }

}

export default CreatePost;