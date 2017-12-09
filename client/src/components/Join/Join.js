import React, { Component } from 'react'
const axios = require('axios')

class Join extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            response: {},
            projectsAr: [],
            userId: ""
        }
    }

    postToDb = () =>
    {
        let urlID = window.location.href
        let getId = urlID.split("/apply-for-group/")
        let id = getId[1];
        let arr = this.state.projectsAr
        let projId = this.state.userId

        arr.push(projId)

        axios.post('/api/join/apply-for-group/' + id, { projectId: id, applicant: arr })
        .then(res =>
        {
            console.log(res)
        })

    }


    componentDidMount()
    {
        axios.get('/api/user/myprofile/')
        .then(res =>
        {
            console.log("get: ", res)
            this.setState({response: res, userId: res.data._id, projectsAr: res.data.projects})
            this.postToDb()

        })
        .catch((err)=>
        {
            console.log(err)
        })
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