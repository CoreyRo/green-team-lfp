import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Browse.css";
import Related from "../../components/Related"
import Feed from "../../components/Feed"
import CreatePost from "../../components/CreatePost";
import MyProjects from "../../components/MyProjects";


class Browse extends Component {

    state = {
        posts: [],
        index: 0,
        create: false,
        show: false
    }

    //State is not supposed to be mutalbe like this, gotta change the 'this.state.index on line 20
    handlePageTurn = (e) => {
        e.preventDefault();
        this.state.index+=5
        this.setState({
            index: this.state.index
        });
    }

    handlePostClick = (e) => {
        e.preventDefault();
        if(this.state.create === false) {
            this.setState({
                create: true
            })
        }
        else {
            this.setState({
                create: false
            })
        }
    }


    handleShowClick = (e) => {
        e.preventDefault();
        if(this.state.show === false) {
            this.setState({
                show: true
            })
        }
        else {
            this.setState({
                show: false
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
                {this.state.create === false ?
                <Col size="md-12">
                <a onClick={this.handlePostClick}><h4 className="post-project">Post a project <i className="fa fa-sort-desc" aria-hidden="true"></i></h4></a>
                </Col>
                :
                <Col size="md-12">
                <a onClick={this.handlePostClick}><h4 className="post-project">Post a project <i className="fa fa-sort-asc" aria-hidden="true"></i></h4></a>
                <CreatePost 
                handlePostClick = {this.handlePostClick}
                />
                </Col>

                }
            </Row>

            <Row>
                {this.state.show === false ?
                <Col size="md-12">
                <a onClick={this.handleShowClick}><h4 className="post-project">Show My Projects<i className="fa fa-sort-desc" aria-hidden="true"></i></h4></a>
                </Col>
                :
                <Col size="md-12">
                <a onClick={this.handleShowClick}><h4 className="post-project">Hide My Projects <i className="fa fa-sort-asc" aria-hidden="true"></i></h4></a>
                <MyProjects/>
                </Col>

                }
            </Row>

            <Row>
                <Col size="md-3">
                    <Related />
                </Col>
                <Col size="md-9">
                    <Feed />
                </Col>
            </Row>
            </Container>
            <Footer /> 
        </div>
        )
    }


}

export default Browse;