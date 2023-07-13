import React from 'react';
import Button from '../Button/Button';
import classes from './tags.module.css';

const Tags = () => {
  return (
    <>
      <h5 className={classes.h5}>Tags</h5>

      <ul className={classes.tag}>
        <li><Button className={classes.button} hasIcon={false} text={"Animation"} /></li>
        <li><Button hasIcon={false} text={"Ilustration"} /></li>
        <li><Button hasIcon={false} text={"Moon"} /></li>
        <li><Button hasIcon={false} text={"Moon"} /></li>
      </ul>
    </>
  );
};

export default Tags;
