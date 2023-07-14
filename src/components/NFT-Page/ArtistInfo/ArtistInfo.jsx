import React from 'react';
import classes from './artist_info.module.css';

import ArtistInfoWrapper from '../ArtistInfoWrapper/ArtistInfoWrapper';
import Tags from '../Tags/Tags';
import Details from '../Details/Details';
import Timer from '../Timer/Timer';



const ArtistInfo = () => {
    
  return (
  <section className={classes.artist_info}>
    <div className={classes.NFTInfo}>
        <ArtistInfoWrapper/>
        <Details/>
        <Tags/>
    </div>
    <div className={classes.timer}>
        <Timer/>
    </div>
  </section>
  )
}

export default ArtistInfo;
