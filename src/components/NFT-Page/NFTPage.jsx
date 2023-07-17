import React from 'react'
import classes from './nft_page.module.css'
import ArtistInfo from './ArtistInfo/ArtistInfo'
import ImagePlaceHolder from './ImagePlaceHolder/ImagePlaceHolder'
import MoreNFTS from './MoreNfts/MoreNFTS'


const NFTPage = () => {
  return (
    <div className={classes.NFTPagedesktop}>
          <header className={classes.header}>
            <ImagePlaceHolder/>
          </header>
          <main className={classes.main}>
            <ArtistInfo/>
            <MoreNFTS/>
          </main>
   
        </div>
)
}

export default NFTPage;
