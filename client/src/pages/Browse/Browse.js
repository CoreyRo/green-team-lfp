import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Browse.css";
// import ProfileCard from "../../components/ProfileCard";
import axios from 'axios';


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
            <Navbar />
            <Header />
            <Container>
                <Row>
                    {this.state.posts.map((post, index) => 
                    <Col size="md-12" key={post._id}>
                        <h3 className="post-header">{post.title}</h3>
                        <p></p>
                        <span className="post-author">Posted By: <a href={"/user/" + post.author}>{post.author}</a></span>
                        <p className="post-description">{post.description}</p>
                    </Col>
                    )}
                </Row>
            </Container>
            <Footer/>
            </div>
        )
    }
}

export default Browse;