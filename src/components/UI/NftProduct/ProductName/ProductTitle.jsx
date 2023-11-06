import React from 'react'

import styles from './productTitle.module.scss'
const ProductTitle = props => {

  const {fontSize} = props
  const style ={
    fontSize
  }
  return (
    <h2 style={style} className={styles.productTitle }>{props.title}</h2>
  )
}

export default ProductTitle