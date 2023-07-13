import React from 'react'
import classes from './nft_page.module.css'
import ArtistInfo from './ArtistInfo/ArtistInfo'
import { Header } from '../header'
import {Footer} from '../footer'


const NFTPage = () => {
  return (
    <div className={classes.NFTPagedesktop}>
        <Header/>
        <main className={classes.NFT_page}>
          <div className={classes.BannerNFT}  alt="header/banner NFTPage" />
          <div className={classes.BannerNFTMobile} alt="banner mobile" />
          <ArtistInfo/>
        </main>
        <Footer/>
    </div>
 
)
}

export default NFTPage;
