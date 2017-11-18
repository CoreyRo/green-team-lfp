import React, { Component } from 'react'
const Logout = event => {
    localStorage.clear()
    window.location.replace("/")
}
export default Logout