import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
<<<<<<< HEAD
=======
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Browse.css";
// import ProfileCard from "../../components/ProfileCard";
>>>>>>> a4d1f10677a0c11cd811715728a4f176e58e245a
import axios from 'axios';
import Related from "../../components/Related"
import Feed from "../../components/Feed"


class Browse extends Component {

    state = {
        posts: []
    }

    // componentDidMount() {
    //     axios.get("/api/user/browse")
    //     .then((res) => {
    //         let data = res.data;
    //         this.setState({
    //             posts: data
    //         });
    //         console.log("State: ", this.state);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }
        
            
        
        
    render() {
        return (
<<<<<<< HEAD
            <Row>
                <Col size="md-3">
                    <Related />
                </Col>
                <Col size="md-9">
                    <Feed />
                </Col>
            </Row> 
        )
    }


=======
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
>>>>>>> a4d1f10677a0c11cd811715728a4f176e58e245a
}

export default Browse;