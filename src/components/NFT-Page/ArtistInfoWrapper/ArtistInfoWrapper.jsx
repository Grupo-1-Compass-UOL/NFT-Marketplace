import React from 'react';
import classes from './artistinfowrapper.module.css';


const ArtistInfoWrapper = () => {
  const [nftName, mintedInfo, descriptionInfo, creatorName] = [
    { NFTname: 'The Orbitians' },
    { minted: 'Minted on Sep 30, 2022' },
    { description:
        'is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br /> <br />' +
        'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br /> <br />' +
        'They live in a metal space machines, high up in the sky and only have one foot on Earth. <br/>' +
        'These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so theyve taken to make human beings their target. <br/>',},
    { creator: 'Orbitian'}
    ];

  const { NFTname } = nftName;
  const { minted } = mintedInfo;
  const { description } = descriptionInfo;
  const {creator} = creatorName;



  return (
    <>
        <h2 className={classes.NFT_name}>{NFTname}</h2>
        <p className={classes.minted}>{minted}</p>
        <div className={classes.additional_info}>
            <h5 className={classes.h5}>Created By</h5>
            <figure className={classes.artist_card}>
              <div className={classes.avatar} alt="img avatar" />
               <figcaption className={classes.creator}>{creator}</figcaption>
            </figure>
            <div className={classes.description}>
          <h5 className={classes.h5}>Description</h5>
          <p className={classes.description_info} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </>
  );
};

export default ArtistInfoWrapper;

