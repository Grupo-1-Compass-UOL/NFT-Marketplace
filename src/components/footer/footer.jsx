import {Logo} from '../logo/logo';
import {IconDC} from '../../assets/images/img/iconDiscord';
import {IconYT} from '../../assets/images/img/iconYoutube';
import {IconTwitter} from '../../assets/images/img/iconTwitter';
import {IconIntagram} from '../../assets/images/img/iconInstragram';
import {IconEmail} from '../../assets/images/img/iconEmail';
import {FooterText} from './FooterText';
import {FooterTitle} from './FooterTitle';
import footerStyles from './footer.module.css'



function Footer() {
  return (
    <div className={footerStyles.footerContent} >
      <div className={footerStyles.footerInfo}>
        <div className={footerStyles.footerContainer}>
          <Logo isFooter={true} />
          <FooterText text="NFT marketplace UI created with Anima for Figma" />
          <FooterText text=" Join our community" />
          <div className={footerStyles.footerIcons}>
            <IconDC />
            <IconYT />
            <IconTwitter />
            <IconIntagram />
          </div>
        </div>
        <div className={footerStyles.footerContainer}>
          <FooterTitle title="Explore" />
          <div className={footerStyles.footerContainer}>
            <FooterText text='Marketplace' />
            <FooterText text='Rankings' />
            <FooterText text='Connect a wallet' />
          </div>
        </div>
        <div className={footerStyles.footerContainer}>
          <FooterTitle title='Join our weekly digest' />
          <FooterText text='Get exclusive promotions & updates straight to your inbox.' />
          <div className={`${footerStyles.footerContainer} ${footerStyles.inputContainer}`}>
            <input className={[footerStyles.inputFooter, footerStyles.footerText].join(' ')} placeholder='Enter Your Email Address' type="text" />
            <button className={footerStyles.btnFooter}><IconEmail /> Subscribe</button>
          </div>

        </div>
      </div>
      <div >
        <hr className={footerStyles.footerLine} />
        <p className={footerStyles.footerMessage}>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div >
  )
}

export default Footer;
