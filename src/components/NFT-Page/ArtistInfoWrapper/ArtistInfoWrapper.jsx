import React from 'react';
import avatarNFT from '../../../assets/images/avatar/avatarNFT.png';
import classes from './artistinfowrapper.module.css';

const ArtistInfoWrapper = () => {
  const [nftName, mintedInfo, creatorInfo, descriptionInfo] = [
    { NFTname: 'The Orbitians' },
    { minted: 'Minted on Sep 30, 2022' },
    { creator: 'Orbitian', avatar: avatarNFT },
        {
            description:
              'is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br /> <br />' +
              'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br /> <br />' +
              'They live in a metal space machines, high up in the sky and only have one foot on Earth. <br/>' +
              'These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so theyve taken to make human beings their target. <br/>',
          },
    ];

  const { NFTname } = nftName;
  const { minted } = mintedInfo;
  const { creator, avatar } = creatorInfo;
  const { description } = descriptionInfo;



  return (
    <>
        <h2 className={classes.artist_name}>{NFTname}</h2>
        <p className={classes.minted}>{minted}</p>
        <div className={classes.additional_info}>
            <h5 className={classes.h5}>Created By</h5>
            <figure  className={classes.artist_card}>
                <img src={avatar} alt="Artist Avatar" className={classes.avatar} />
                <figcaption className={classes.avatar_name}>{creator}</figcaption>
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

