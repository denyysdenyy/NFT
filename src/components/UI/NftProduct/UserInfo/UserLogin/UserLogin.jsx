import React from 'react'

const UserLogin = props => {

    const {fontSize,background} = props

    const style = {
        fontSize,
        fontWeight: 500,
        background,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
  return (
    <a  href="#" style={style}>@{props.userLogin}</a>
  )
}

export default UserLogin