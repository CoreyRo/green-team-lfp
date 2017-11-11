import React, {Component} from 'react'
import {Row, Col} from "../Grid"
import "./Feed.css"
import Card from "../Card"

class Feed extends Component {
    constructor()
    {
        super()
        this.state = 
        { 
            // feedData: [{
            //     title: "Test Title",
            //     subtitle: "Test Subtitle",
            //     text: "Test Text"
            // }, {
            //     title: "Test Title2",
            //     subtitle: "Test Subtitle2",
            //     text: "Test Text2"
            // }]
           
        }
    }

    componentDidMount() {

    }

    projectLink = e =>
    {
        e.preventDefault();

    }

    render() {
        return (

            <div id="main-feed">
                {this.state.feedData ? this.state.feedData.map(e =>
                (
                    <Card title={e.title} subtitle={e.subtitle}
                        text={e.text} firstText="View Project" secondText="View Profile"/>
                ))
                :
                (<h1 id="nan">No Projects Available</h1>)
                }
            </div> 
        )
    }
}
    
export default Feed