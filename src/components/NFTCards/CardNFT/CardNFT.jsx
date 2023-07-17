import React from 'react';
import classes from './cardnft.module.css';
import { Link } from "react-router-dom"

const CardNFT = ({ 
  title, 
  image,
  price, 
  bid, 
  backgroundColor,
  avatar, 
  creator }) => {

  const imageStyle = {
    width: '330px',
    height:'295px',
    borderRadius:'20px 20px 0px 0px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  };

  const avatarImage = {
    backgroundImage: `url(${avatar})`,
    width: '30px',
    height: '30px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginRight: '10px',
  }

  const backgroundCard = {
      backgroundColor : backgroundColor,
  }


  return (
    <Link to="/NFTPage" className={classes.customLink} >
      <div className={classes.cardContainer} style={backgroundCard} >
        <div style={imageStyle}></div>
        <div className={classes.cardInfoContainer}>
        <h2 className={classes.NftName}>{title}</h2>
          <div className={classes.avatar}>
            <div style={avatarImage}></div>
            <span className={classes.creator}>{creator}</span>
          </div>
          <div className={classes.infos}>
            <span><p>Price</p>${price}/ETH</span>
            <span><p>Highest Bid </p>{bid}wEth</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNFT;
