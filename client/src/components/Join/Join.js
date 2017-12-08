import React from 'react'
const axios = require('axios')

const Join = (event) =>
{
    let urlID = window.location.href
    let getId = urlID.split("/apply-for-group/")
    let id = getId[1];
    console.log(id)
    axios.post('/api/join/apply-for-group/' + id)
    return (
        <div>
            User Accepted
        </div>
    )
}

export default Join