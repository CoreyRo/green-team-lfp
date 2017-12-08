import React, { Component } from 'react'
const axios = require('axios')

class Join extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {

        }
    }

    componentDidMount()
    {
        let urlID = window.location.href
        let getId = urlID.split("/apply-for-group/")
        let id = getId[1];

        axios.get('/api/user/myprofile/')
        .then(res =>
        {
            axios.post('/api/join/apply-for-group/' + id, { projectOwner: id, applicant: res._id })
            .then(res =>
            {
                console.log(res)
            })
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