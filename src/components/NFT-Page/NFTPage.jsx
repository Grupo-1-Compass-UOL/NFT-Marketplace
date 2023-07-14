import React from 'react'
import classes from './nft_page.module.css'
import ArtistInfo from './ArtistInfo/ArtistInfo'
import { Header } from '../header'
import ImagePlaceHolder from './ImagePlaceHolder/ImagePlaceHolder'
import MoreNFTS from './MoreNfts/MoreNFTS'



const NFTPage = () => {
  return (
    <div className={classes.NFTPagedesktop}>
        <div className={classes.NFTPageMobile}>
          <header className={classes.header}>
            <Header/>
            <ImagePlaceHolder/>
          </header>
          <main className={classes.main}>
            <ArtistInfo/>
            <MoreNFTS/>
            
          </main>
        </div>
    </div>
 
)
}

export default NFTPage;
