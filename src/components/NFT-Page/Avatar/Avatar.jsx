import React from 'react'
import classes from './avatar.module.css'


const Avatar = () => {

const creator = 'Orbitian';

  return (
    <div className={classes.avatarContainer}>
      <div className={classes.avatar}/>
      <p className={classes.creator}>{creator}</p>
    </div>
  )
}

export default Avatar
