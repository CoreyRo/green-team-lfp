import React, { Component } from 'react'
const axios = require('axios')

class Join extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            res: {},
            applyingId:"",
            projectForId: "",
            joinedArr: [],
        }
    }
    
    componentDidMount()
    {
        //breaks up the url into the applying user id, and the project they're applying
        let urlID = window.location.href
        let applyId, projectId
        [applyId, projectId ] = urlID.split("/apply-for-group/")[1].split('/for/')
        // console.log("applyId", applyId)
        // console.log("projectId", projectId)
        this.setState({
            applyingId: applyId,
            projectForId: projectId
        }, () => this.getProjectArr())
    }

    //Gets the current joined array from the project
    getProjectArr = () => {
        axios.get('/api/user/project/' + this.state.projectForId)
        .then(res =>
        {
            // console.log("get: ", res)
            //if the user is already part of the project, do not add to the array
            res.data.joined.includes(this.state.applyingId)
            ? 
            console.log("Already Joined" )
            :
            //otherwise add the the appying user to the existing project
            this.setState({response: res, joinedArr: [...res.data.joined, this.state.applyingId]}, () => this.postToDb())
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }


    //Uses the new Array with all the userIds and updates the Post models with the new joined array
    postToDb = () =>
    {
        // console.log("POST to DB STATE", this.state)
        axios.post('/api/join/apply-for-group/' + this.state.projectForId, {joined: this.state.joinedArr })
        .then(res =>
        {
            // console.log("UPDATE RES", res)
        })
        .catch(err => console.log("update res err", err))
    }

    render()
    {
        return (
            <div>
                User Accepted
            </div>
        )
    }
}

export default Join