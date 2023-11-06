import React from 'react'

const UserAvatar = (props) => {
    
    const {width,height,margin,borderRadius} = props

    const style = {
        width,
        height,
        margin,
        borderRadius,
        boxShadow: "0px 0px 15px 0px rgba(255, 255, 255, 0.15)"

    }

  return (
    <img style={style} src={props.userImage} alt="user" />
  )
}

export default UserAvatar