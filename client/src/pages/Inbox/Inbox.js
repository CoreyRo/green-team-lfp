import React, { Component } from 'react';
import { Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import axios from "axios";
import "./Inbox.css";

class Inbox extends Component {

    state = {
        id: "",
        messages: [],
        replyClicked: false,
        message: "",
        senderId: "",
        projName: "",
        username: "",
        sendUser: ""
    }

    componentDidMount() {
        axios.get("api/user/myprofile/")
        .then((res) => {
            this.setState({
                id: res.data._id,
                username: res.data.username
            })
            axios.get("api/user/messages", {
                params: {
                    userId: this.state.id
                }
            })
            .then((res) => {
                console.log("Messages res", res)
                this.setState({
                    messages: res.data
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

    handleReplyButton = (e) => {
        e.preventDefault();
        if(this.state.replyClicked === false) {
            this.setState({
                replyClicked: true
            })
        }
        else {
            this.setState({
                replyClicked: false
            })
        }
        this.setState({
            senderId: e.target.id,
            projName: e.target.dataproj
        })

        axios.get("/api/user/reply/" + this.state.senderId)
        .then((res) => {
            console.log("user", res);
        })

    }

    handleReplySend = (e) => {
        e.preventDefault();
        axios.post("/api/user/messages", {
            senderId: this.state.senderId,
            userId: this.state.id,
            senderUsername: this.state.username,
            projectTitle: this.state.projName,
            text: this.state.message
        })
        .then((res)=> {
            console.log(res)
            this.setState({
                message: "",
                replyClicked: false,
                projName: "",
                username: "",
                senderId: ""
            })
        })
    }

    render() {
        return(
            <div>
            <Navbar />
            <Container>
                <h1 className="inbox-header">Inbox</h1>
                {this.state.replyClicked ? 
                (
                    <div className="message-area row">
                    <form  id="usrform" onChange={this.handleInputChange} >
                        <Col size="md-12 from">
                        <span className="from-user">From: {this.state.username}</span>
                        <span className="from-user">Sending To: {this.state.sendUser}</span>
                        <textarea rows="4" cols="100" name="message" form="usrform" onChange={this.handleInputChange} />
                        <br/>
                        <button onClick={this.handleMessageSend}>Send</button>
                        </Col>
                    </form>
                    </div>
                )
                :
                (
                    <div></div>
                )}
                {this.state.messages ? this.state.messages.map(e =>
                <div className="row inbox" key={e._id}>
                    <Col size="xs-3 md-3 lg-3 text-center">
                        <h6 className="sender">{e.senderUsername}</h6>
                        <button id={e.senderId} dataproj={e.projectTitle} className="btn reply-btn" onClick={this.handleReplyButton}><i className="fa fa-lg fa-reply" id={e.senderId} dataproj={e.projectTitle}  aria-hidden="true" onClick={this.handleReplyButton}> Reply</i></button>
                    </Col>
                    <Col size="xs-9 sm-9 md-9 lg-9">
                        <p className="sent-text"><span className="project-t">Project: {e.projectTitle}</span>&nbsp;&nbsp;&nbsp;&nbsp;{e.text}</p>
                    </Col>
                </div>
                )
                :
                (
                <Col size="xs-4">
                    <h6 className="null">Sender Name</h6>
                </Col>
                )}
            </Container>
            <Footer/>
            </div>
        )
    }

}

export default Inbox;