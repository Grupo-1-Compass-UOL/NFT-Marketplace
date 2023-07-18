import React from 'react'
import classes from './details.module.css'



const Details = () => {

  return (
    <>
      <h5 className={classes.h5}>Details</h5>
      <div className={classes.details}>
        <a href="#">
          <IconWorld />
          <span>View on Etherscan</span>
        </a>
        <a href="#">
          <IconWorld />
          <span>View Original</span>
        </a>
      </div>
    </>
  )
}

export default Details
