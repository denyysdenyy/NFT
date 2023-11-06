import React from 'react'
import styles from './cards.module.scss'
import Card from '../../../../UI/Card/Card'
import {data} from './nft.data.js'

const Cards = () => {



  return (
    <div className={styles.cards}>
       { data.map(nft=>(
      <Card key={nft.id}
        userName={nft.name}
        userLogin={nft.login}
        userSold={nft.Sold}
        userEnd={nft.End}
       />

      ))}
    </div>
  )
}

export default Cards