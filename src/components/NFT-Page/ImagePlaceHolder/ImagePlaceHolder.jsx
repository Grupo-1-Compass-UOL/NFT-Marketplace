
import React from 'react'
import classes from './placeholder.module.css'
import BannerDesktop from '../../../assets/images/bannerNFTPage.jpg'
import BannerMobile from '../../../assets/images/bannerNFTPage_mobile.jpg'

const ImagePlaceHolder = () => {
  return (
    <figure className={classes.container}>
        <img className={classes.BannerDesktop} src={BannerDesktop} alt="Image Place Holder Desktop" />
        <img className={classes.BannerMobile}  src={BannerMobile} alt="Image Place Holder Mobile" />
    </figure>
  )
}

export default ImagePlaceHolder
