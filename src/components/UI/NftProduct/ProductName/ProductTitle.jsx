import React from 'react'

import styles from './productTitle.module.scss'
const ProductTitle = props => {
  return (
    <h2 className={styles.productTitle }>{props.title}</h2>
  )
}

export default ProductTitle