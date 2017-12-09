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
        projectId: "",
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

        let info = e.target.id.split(",");
        let senderId = info[0];
        let projName = info[1];
        let projectId = info[2];
        this.setState({
            senderId: senderId,
            projName: projName,
            projectId: projectId
        }, () => {
   
            axios.get("/api/user/reply/" + this.state.senderId)
            .then((res) => {
                this.setState({
                    sendUser: res.data.username
                })
            })
        })

    }

    handleReplySend = (e) => {
        e.preventDefault();
        axios.post("/api/user/messages", {
            senderId: this.state.id,
            userId: this.state.senderId,
            senderUsername: this.state.username,
            projectTitle: this.state.projName,
            projectId: this.state.projectId,
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
        window.location.reload();
    }

        handleMessageSend = (e) => {
        e.preventDefault();
        axios.post("/api/user/messages", {
            senderId: this.state.id,
            userId: this.state.senderId,
            projectId: this.state.projName,
            senderUsername: this.state.username,
            projectTitle: this.state.projName,
            text: this.state.message
        })
        .then((res)=> {
            this.setState({
                message: "",
                sentmsg: true
            })
        })

    }

    handleDelete = (e) => {
        e.preventDefault();
        let info = e.target.id.split(",");
        let messageId = info[0];
        let index = info[1];
        axios.post("/api/user/delete/" + messageId)
        .then((res) => {
            console.log("delete res", res);
        })
        window.location.reload();

    }

    render() {
        return(
            <div>
            <Navbar />
            <Container>
                <h1 className="inbox-header">Inbox</h1>
                {this.state.replyClicked ? 
                (
                    <div className="row">
                        <Col size="xs-3 sm-3 md-3 lg-3 xl-3 recipient">
                        <h6 className="from-user">From: {this.state.username} </h6>
                        <h6 className="end-user">Sending To: {this.state.sendUser}</h6>
                        </Col>
                        <Col size="xs-8 sm-8 md-8 lg-8 xl-8">
                        <form  id="usrform" onChange={this.handleInputChange} >
                            <textarea name="message" form="usrform" className="text-area" placeholder="Enter message here..." onChange={this.handleInputChange} />
                        </form>
                        </Col>
                        <Col size="xs-1 sm-1 md-1">
                            <button className="reply-btnn" onClick={this.handleReplySend}>Send</button>
                        </Col>
                    </div>
                )
                :
                (
                    <div></div>
                )}
                <div className="inbox-wrapper">
                {this.state.messages ? this.state.messages.map((e, index) =>
                <div className="row inbox" key={e._id}>
                    <Col size="xs-4 md-4 lg-4 text-center">
                        <h6 className="sender">{e.senderUsername}</h6>
                        <button className="btn reply-btn">
                            <span className="fa fa-lg fa-reply" id={e.senderId + "," + e.projectTitle + "," + e.projectId + "," + index} onClick={this.handleReplyButton} aria-hidden="true"> Reply</span>
                        </button>
                    </Col>
                    <Col size="xs-8 sm-8 md-8 lg-8">
                        <p className="sent-text">
                            <span className="project-t">Project: {e.projectTitle}
                                <span>
                                    <button className="btn delete-btn" onClick={this.handleDelete}>
                                        <i className="fa fa-lg fa-trash-o" id={e._id + "," + index} aria-hidden="true"></i>
                                    </button>
                                </span>
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;{e.text}
                        </p>
                    </Col>
                </div>
                )
                :
                (
                <Col size="xs-4">
                    <h6 className="null">Sender Name</h6>
                </Col>
                )}
                </div>
            </Container>
            <Footer/>
            </div>
        )
    }

}

export default Inbox;