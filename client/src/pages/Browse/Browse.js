import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import "./Browse.css";
// import ProfileCard from "../../components/ProfileCard";
import axios from 'axios';


class Browse extends Component {

    state = {
        posts: []
    }

    componentDidMount() {

        console.log("did mount");

        axios.get("/api/user/browse")
        .then((res) => {
            console.log("Posts from db", res);
            let data = res.data;
            this.setState({
                posts: data
            });
            console.log("State", this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
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
        )
    }

}

export default Browse;