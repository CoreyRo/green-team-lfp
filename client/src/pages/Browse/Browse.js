import React, { Component } from 'react';
import { Col, Row } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Browse.css";
// import ProfileCard from "../../components/ProfileCard";
import axios from 'axios';
import Related from "../../components/Related"
import Feed from "../../components/Feed"


class Browse extends Component {

    state = {
        posts: [],
        index: 0
    }

    componentDidMount() {
        axios.get("/api/user/browse")
        .then((res) => {
            let data = res.data;
            this.setState({
                posts: data
            });
            console.log("State: ", this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handlePageTurn = (e) => {
        e.preventDefault();
        this.state.index+=5
        this.setState({
            index: this.state.index
        });
    }

    render() {
        return (
        <div>
            <Navbar />
            <Header />
            <Row>
                <Col size="md-3">
                    <Related />
                </Col>
                <Col size="md-9">
                    <Feed />
                </Col>
            </Row>
            <Footer /> 
        </div>
        )
    }


}

export default Browse;