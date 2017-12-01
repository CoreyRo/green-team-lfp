import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
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
        posts: []
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
        
            
        
        
    render() {
        return (
        <div>
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