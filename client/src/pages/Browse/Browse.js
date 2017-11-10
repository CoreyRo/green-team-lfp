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
                    <Col size="md-3">
                        <Related />
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default Browse;