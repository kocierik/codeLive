import React from 'react'
import Login from "../login"
import Register from "../register"
import "./index.scss"
function AccessPage(props) {
  return (
    <div className="container-content_right">
    <div className="container-form">
      <div className="title-login" >{!props.sign ? "Sign in" : "Sign up"}</div>
      <div className="line"></div>
        {props.sign ? <Login /> : <Register />} 
    </div>
  </div>
  )
}

export default AccessPage