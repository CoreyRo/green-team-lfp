import React, { Component } from 'react';
import { Row, Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
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
        myId: "",
        message: "",
        msgClicked: false,
        username: "",
        request: false,
        sentmsg: false

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
                this.setState({
                    request: true
                })
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
                username: res.data.username,
                myId: res.data._id
            })

        })

        axios.get("/api/user/project/" + id)
        .then((res) => {
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
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


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

    handleMessageSend = (e) => {
        e.preventDefault();
        axios.post("/api/user/messages", {
            senderId: this.state.myId,
            userId: this.state.userId,
            projectId: this.state.projectId,
            senderUsername: this.state.username,
            projectTitle: this.state.title,
            text: this.state.message
        })
        .then((res)=> {
            this.setState({
                message: "",
                sentmsg: true
            })
        })

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
                            <i className="fa fa-lg fa-paper-plane"></i>
                        </button>
                        <button className="icons" onClick={this.handleMessageClick}>
                            <i className="fa fa-lg fa-comments"></i>
                        </button>
                        {this.state.request ? (
                            <div>
                            <h6 className="message-area">A request to join has been sent to the project owner!</h6>
                            </div>
                        )
                        :
                        (
                            <div></div>
                        )}

                        {this.state.msgClicked ? (
                            <div className="message-area">
                            <form  id="usrform" onChange={this.handleInputChange} >
                                From: <span className="from-user">{this.state.username}</span>
                                <textarea rows="4" cols="50" name="message" form="usrform" onChange={this.handleInputChange} />
                                <br/>
                                <button onClick={this.handleMessageSend}>Send</button>
                            </form>
                            {this.state.sentmsg ? (
                                <div>
                                    <span>You're message has been sent!</span>
                                </div>

                            )
                            :
                            (
                                <div></div>
                            )}
                            
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