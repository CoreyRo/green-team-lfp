import React, {Component} from 'react'
// import {Row, Col} from "../Grid"
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
            this.setState({
                posts: data
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }


    render() {
        return (

            <div id="main-feed">
                <h1 id="title-feed">Projects Nearby</h1>
                {this.state.posts ? this.state.posts.map(e =>
                (

                    <Card key={e._id} title={e.title} subtitle={e.author}
                        text={e.description} firstText="View Project" secondText="View Profile"
                        profile={e._id} project="HELLO"/>
                ))
                :
                (<h1 id="nan">No Projects Available</h1>)
                }
            </div> 
        )
    }
}
    
export default Feed