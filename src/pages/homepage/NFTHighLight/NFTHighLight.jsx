
import MagicMashrooms from '../../../assets/images/NFTHighlight.png'
import Avatar from '../../../assets/images/Avatar Placeholder.png'
import classes from './nfthighlight.module.css'
import TimerNFT from './TimerNFT';
import Eye from '../../../assets/images/Eye.png';

function NFTHighLight() {

  const size = window.innerWidth;
  const image = {
    backgroundImage: `url(${MagicMashrooms})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: size >= 1024 ? '690px' : size >= 764 ? '630px' : size >= 375 ? '590px' : 'auto',
  };
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
    <div style={containerStyle}>
      <div style={image} className={classes.NFTHighLightContainer}>
        <div className={classes.NFTArtist}>
          <div className={classes.ArtistCard}>
            <img src={Avatar} alt="" />
            <p>Sharomi</p>
          </div>
          <h3>Magic Mashrooms</h3>
          <div className={classes.TimerMobile}>
            <TimerNFT />
          </div>
          <button className={classes.btnNFT}> <img src={Eye} />See NFT</button>
        </div>
        <div className={classes.TimerDesktop} >
          <TimerNFT />
        </div>
      </div>
    </div>
  )
}

export default NFTHighLight
