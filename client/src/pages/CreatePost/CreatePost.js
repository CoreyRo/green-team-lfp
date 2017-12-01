import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./CreatePost.css";
import axios from 'axios';

class CreatePost extends Component {

    state = {
        user: []
    }

    ComponentDidMount() {

    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("form submit working");

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
                            <div class="form-group">
                                <label for="exampleInputEmail1">Project Title</label>
                                <input type="text" class="form-control" id="projectTitle" placeholder="Enter Project Title"/>
                            </div>
                            <div class="form-group">
                                <label for="memberSelect">Members Needed</label>
                                <select class="form-control" id="memberSelect">
                                <option disabled selected>...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="skillsDesired">Skills Desired (Seperate with a comma)</label>
                                <input class="form-control" id="skillsDesired" placeholder="Ex: javascript, node, react, etc.."/>
                            </div>
                            <div class="form-group">
                                <label for="projectDetails">Project Details</label>
                                <textarea class="form-control" id="projectDetails" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">Project Logo (optional)</label>
                                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                                <small id="fileHelp" class="form-text text-muted">Enter in a company logo or picture if desired this will display with your project</small>
                            </div>

                            <button type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
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