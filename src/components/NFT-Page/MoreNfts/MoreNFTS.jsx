import React from 'react'
import classes from './moreNFTS.module.css'
import ListCards from '../CardList/ListCards'
import Button from '../Button/Button'

const MoreNFTS = () => {
  return (
  <section className={classes.MoreNFTS}>
    <div className={classes.title}>
        <h1>More from this artist</h1>
        <Button 
          border ='solid 3px #A259FF'
          width = '268px'
          height ='60px'
          padding =' 0px 50px 0px 50px'
          text='Go To Artist Page'
        />
    </div>
    <ListCards/>

  </section>
  )
}

export default MoreNFTS
