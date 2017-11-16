import React, {Component} from 'react'
import {Row, Col} from "../Grid"
import axios from "axios"
import "./Feed.css"
import Card from "../Card"

class Feed extends Component {
    
    state = 
    { 
        posts: []
        
    }

    componentDidMount() {
        axios.get("/api/user/browse")
        .then((res) => {
            let data = res.data;
            console.log(data)
            this.setState({
                posts: data
            });
            console.log("State: ", this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    projectLink = e =>
    {
        e.preventDefault();

    }

    render() {
        return (

            <div id="main-feed">
                <h1 id="title">Projects Nearby</h1>
                {this.state.posts ? this.state.posts.map(e =>
                (

                    <Card key={e._id} title={e.title} subtitle={e.author}
                        text={e.description} firstText="View Project" secondText="View Profile"/>
                ))
                :
                (<h1 id="nan">No Projects Available</h1>)
                }
            </div> 
        )
    }
}
    
export default Feed