import React, {Component} from 'react'
// import {Row, Col} from "../Grid"
import {Link} from 'react-router-dom'
import axios from "axios"
import "./Feed.css"


class Feed extends Component {
    
    state = 
    { 
        posts: [],
        page: 1,
        pageCount: null,
        count: null
        
    }

    componentDidMount() {
        this.getProjects()
        
    }
    getProjects = (e) => {
        axios.get("/api/user/browse/page/" + this.state.page)
            .then((res) => {
                console.log("Page", this.state.page)
                console.log("Post data", res.data)
                this.setState({
                    posts: res.data.results,
                    pageCount: res.data.pageCount,
                    count: res.data.count
                });

                console.log("POSTS STATE", this.state)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    nextPage = (e) =>{
        
        this.setState({ page: this.state.page + 1 }, () => this.getProjects())
    }
    prevPage = (e) => {

        this.setState({ page: this.state.page + 1 }, () => this.getProjects())
    }

    pageButtons = (e) => {
        if (this.state.pageCount >= this.state.page) {
            return (<button onClick={this.nextPage}>NEXT</button>)
        }
        else if (this.state.pageCount <= this.state.page) {
            return (<button onClick={this.prevPage}>NEXT</button>)
        }
        else{
            <h1>BROKE</h1>
        }
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
                    <Link className="btn view-btn" to={"/project/" + e._id}>View Project</Link>
                    <Link className="btn view-btn" to={"/profile/" + e.userId}>View Profile</Link>
                </div>
                ))
                :
                (<h1 id="nan">No Projects Available</h1>)
                }
                {this.pageButtons}
            </div> 
        )
    }
}
    
export default Feed