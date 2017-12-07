import React, {Component} from 'react'
// import {Row, Col} from "../Grid"
import {Link} from 'react-router-dom'
import axios from "axios"
import "./Feed.css"


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

            console.log(this.state.posts)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleProfileView = (e) => {

    }

    handleProjectView = (e) => {
        
    }


    render() {
        return (

            <div id="main-feed">
                <h1 id="title-feed">Projects Nearby</h1>
                {this.state.posts ? this.state.posts.map(e =>
                (
                <div className="col-myProjects" key={e._id}>
                    <h4 className="myProject-titles">{e.title}</h4>
                    <h6>Posted By: <span className="username-post">{e.author}</span></h6>
                    <h6>Members Needed: <span className="username-post">{e.members}</span></h6>
                    <p className="proj-details">Project Details: <span>{e.description}</span></p>
                    <button className="btn view-btn" onClick={this.handleProjectView}>View Project</button>
                    <button className="btn view-btn" onClick={this.handleProfileView}>View Profile</button>
                </div>
                ))
                :
                (<h1 id="nan">No Projects Available</h1>)
                }
            </div> 
        )
    }
}
    
export default Feed