import React from 'react'
import classes from './nft_page.module.css'
import ArtistInfo from './ArtistInfo/ArtistInfo'
import { Header } from '../header'
import ImagePlaceHolder from './ImagePlaceHolder/ImagePlaceHolder'
import MoreNFTS from './MoreNfts/MoreNFTS'
import Footer from '../footer'



const NFTPage = () => {
  return (
    <div className={classes.NFTPagedesktop}>
          <header className={classes.header}>
            <Header/>
            <ImagePlaceHolder/>
          </header>
          <main className={classes.main}>
            <ArtistInfo/>
            <MoreNFTS/>
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
)
}

export default NFTPage;
