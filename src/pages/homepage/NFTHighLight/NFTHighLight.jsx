
import MagicMashrooms from '../../../assets/images/NFTHighlight.png'
import classes from    './nfthighlight.module.css'
import Timer from '../../../components/NFT-Page/Timer/Timer'

import React from 'react'

const NFTHighLight = () => {
  return (
    <div className={classes.NFTHighLightContainer}>   
        <div className={classes.Mobile}>
          <img className={classes.MagicMashrooms} src={MagicMashrooms} alt="image magic mashrooms" />
          <div className={classes.effectPurple}></div>
        </div>
        <div className={classes.versionMobile}>
          <div>
            <h1 className={classes.h1}>Magic Mashrooms</h1>
            <button className={classes.btnMashrooms}>See NFT</button>
          </div>
          <div>
            <Timer />
          </div>
        </div>
    </div>
  )
}

export default NFTHighLight
