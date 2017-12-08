import React, { Component } from 'react';
import { Col, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import axios from "axios";
import "./Inbox.css";

class Inbox extends Component {

    state = {
        id: "",
        messages: []
    }

    componentDidMount() {
        axios.get("api/user/myprofile/")
        .then((res) => {
            this.setState({
                id: res.data._id
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


    render() {
        return(
            <div>
            <Navbar />
            <Container>
                {this.state.messages ? this.state.messages.map(e =>
                <div className="row inbox" key={e._id}>
                    <Col size="xs-3 md-3 lg-3 text-center">
                        <h6 className="sender">{e.senderUsername}</h6>

                    </Col>
                    <Col size="xs-9 sm-9 md-9 lg-9">
                        <p className="sent-text">{e.text}</p>

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