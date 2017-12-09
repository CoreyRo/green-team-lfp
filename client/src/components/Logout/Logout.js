import axios from 'axios'
import React from 'react'

const Logout = event => {
    
    axios.get('/api/user/logout')
    .then(res => {
        console.log(res)
        localStorage.clear()
        window.location.replace("/sign-in")
    })
    .catch(err => {
        console.log(err)
        localStorage.clear()
        window.location.replace("/sign-in")
    })
    return (<div></div>)
}
export default Logout