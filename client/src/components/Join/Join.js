import React, { Component } from 'react'
const axios = require('axios')

class Join extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
            {
                _res: {},
                otherRes: {},
                applyingId:"",
                projectForId: "",
                joinedArr: [],
                projectArr: []
            }
    }

    componentDidMount()
    {
        //breaks up the url into the applying user id, and the project they're applying
        let urlID = window.location.href
        let applyId, projectId
        [applyId, projectId ] = urlID.split("/apply-for-group/")[1].split('/for/')
        this.setState({
            applyingId: applyId,
            projectForId: projectId
        }, () => this.runAxioscalls())
    }

    //Gets the current joined array from the project
    getJoinedArr = () => {
        axios.get('/api/user/project/' + this.state.projectForId)
            .then(res =>
            {
                //if the user is already part of the project, do not add to the array
                res.data.joined.includes(this.state.applyingId)
                    ?
                    console.log("Already Joined Project" )
                    :
                    //otherwise add the the appying user to the existing project
                    this.setState({_res: res, joinedArr: [...res.data.joined, this.state.applyingId]}, () => this.postToPostModel())
            })
            .catch((err)=>
            {
                console.log(err)
            })
    }

    //Gets the current joined array from the project
    getProjectArr = () => {
        axios.get('/api/user/profile/' + this.state.applyingId)
            .then(resB =>
            {
                //if the user is already part of the project, do not add to the array
                resB.data.joined.includes(this.state.projectForId)
                    ?
                    console.log("Project already on user" )
                    :
                    //otherwise add the the appying user to the existing project
                    this.setState({otherRes: resB, projectArr: [...resB.data.joined, this.state.projectForId]}, () => this.postToUserModel())
            })
            .catch((err)=>
            {
                console.log(err)
            })
    }

    //Uses the new Array with all the userIds and updates the Post models with the new joined array
    postToPostModel = () =>
    {
        axios.post('/api/join/apply-for-group/' + this.state.projectForId, {joined: this.state.joinedArr })
            .then(res =>
            {

            })
            .catch(err => console.log("update res err", err))
    }

    postToUserModel = () =>
    {
        axios.post('/api/user/profile/' + this.state.applyingId, {joined: this.state.projectArr })
            .then(res =>
            {

            })
            .catch(err => console.log("update res err", err))
    }

    runAxioscalls = () => {
        this.getProjectArr()
        this.getJoinedArr()
        setTimeout(function(){
            window.location.replace("/myProfile")
        }, 800);





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