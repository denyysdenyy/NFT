import React from 'react'

const UserName = props => {

    const {fontFamily,fontSize,fontWeight,color} = props

    const style = {
      fontFamily:"$secondary-font",
      fontSize,
      fontWeight:700,
      color
    }
    
  return (
    <h3  style={style}>{props.userName}</h3>
  )
}

export default UserName