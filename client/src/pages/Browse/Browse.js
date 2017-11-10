import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import Related from "../../components/Related"
import Feed from "../../components/Feed"

class Browse extends Component {

    constructor()
    {
        super()

    }


    render() {
        return (
            <Container>
                <Row>
                    <div className="md-3">
                        <Related />
                    </div>
                        <Feed />
                </Row>
            </Container>
        )
    }


}

export default Browse;