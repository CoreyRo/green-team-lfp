import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import Feed from "../../components/Feed"

class Browse extends Component {

    constructor()
    {
        super()

    }


    render() {
        return (
            <Container>
                <Feed />
            </Container>
        )
    }


}

export default Browse;