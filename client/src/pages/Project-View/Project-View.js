import React, { Component } from 'react';
import { Row, Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
import { Link } from 'react-router-dom'
import "./Project-View.css";

class Project extends Component {

    state = {
        projectId: "",
        title: "",
        author: "",
        description: "",
        members: "",
        firstName: "",
        lastName: "",
        about:"",
        email: "",        
        userSkills: [],
        desiredSkills: [],
        userId: "",
        message: "",
        msgClicked: false,
        username: ""

    }

    sendMail = (e) =>
    {
        e.preventDefault()
        let applyingUser
        axios.get('/api/user/myProfile/').then(user =>
        {
            applyingUser = user.data
            axios.post('/api/join/join-group',
            {
                projectOwner: this.state,
                applyingUser: applyingUser
            })
            .then((res) =>
            {
                console.log(res)
            })
        })


    }



    //Cant mutate the state like this, gotta use this.setState({})
    componentDidMount() {
        //grab the id off of the window location and store it in state.
        let urlID = window.location.href;
        let getId = urlID.split("/project/");
        let id = getId[1];
        this.setState({
            projectId: id
        })

        axios.get("/api/user/myprofile/")
        .then((res) => {
            this.setState({
                username: res.data.username
            })

        })

        axios.get("/api/user/project/" + id)
        .then((res) => {
            console.log(res);
            this.setState({
                userId: res.data.userId,
                author: res.data.author,
                title: res.data.title,
                description: res.data.description,
                members: res.data.members,
                desiredSkills: res.data.desiredSkills
            })
            axios.get("/api/user/profile/" + this.state.userId)
            .then((res) => {
                this.setState({
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    about: res.data.about,
                    userSkills: res.data.skills
                })

                console.log("Full state", this.state)
            })
        })
    }

    handleMessageClick = (e) => {
        e.preventDefault();
        if(this.state.msgClicked === false) {
            this.setState({
                msgClicked: true
            })
        }
        else {
            this.setState({
                msgClicked: false
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Container>
                <Row>
                    <Col size="md-6 left-col">
                    <h3>{this.state.title}</h3>
                    <i className="fa fa-lg fa-thumbs-o-up like-btn" aria-hidden="true">Like</i>
                    <i className="fa fa-lg fa-archive save-btn" aria-hidden="true">Save</i>
                        <h6 className="small-headers">Details</h6>
                        <p className="description">{this.state.description}</p>
                        <h6 className="small-headers">Skills Desired</h6>
                        {this.state.desiredSkills.map((e,index) =>
                            <span className="skills" key={index}>{e}</span>
                        )}


                        <h6 className="small-headers">Contact</h6>
                        <button className="icons" onClick={this.sendMail}>
                            <i className="fa fa-2x fa-envelope-o"></i>
<<<<<<< HEAD
                        </a>
                        <button className="icons" onClick={this.handleMessageClick}>
=======
                        </button>
                        <a className="icons" href="#">
>>>>>>> master
                            <i className="fa fa-2x fa-comments"></i>
                        </button>

                        {this.state.msgClicked ? (
                            <div className="message-area">
                            <form  id="usrform">
                                From: <span className="from-user">{this.state.username}</span>
                                <textarea rows="4" cols="50" name="message" form="usrform"/>
                                <br/>
                                <button>Send</button>
                            </form>
                            
                            </div>

                        )
                        :
                        (
                            <div></div>
                        )}
                        
                    </Col>


                    <Col size="md-5 outer-col">
                    <div className="col-right-col">
                    <h3>Project Owner: <a className="username" href="/profile/">{this.state.author}</a></h3>
                        <h6 className="small-headers">Bio</h6>
                        <p className="description">{this.state.about}</p>
                        <h6 className="small-headers">Skills</h6>
                        {this.state.userSkills.map((e,index) =>
                        <span className="skills" key={index}>{e}</span>
                        )}
                        </div>

                        <div className="col-browse-col">
                        <a href="/browse">Back To Browsing</a>
                        </div>
                    </Col> 
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }

}

export default Project;