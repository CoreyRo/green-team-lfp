import React, {Component} from 'react'
import {Row, Col} from "../Grid"
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
                {this.state.feedData ? this.state.posts.map(e =>
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