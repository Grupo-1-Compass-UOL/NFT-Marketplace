import { Logo } from '../logo/logo';
import { IconDC } from '../img/iconDiscord';
import { IconYT } from '../img/iconYoutube';
import { IconTwitter } from '../img/iconTwitter';
import { IconInstagram } from '../img/iconInstagram';
import { IconEmail } from '../img/iconEmail';
import { Text } from '../text/text';
import { FooterTitle } from './footerTitle';
import footerStyles from './footer.module.css'



function Footer() {
    return (
        <div className={footerStyles.footerContent} >
            <div className={footerStyles.footerInfo}>
                <div className={footerStyles.footerContainer}>
                    <Logo isFooter={true} />
                    <Text text="NFT marketplace UI created with Anima for Figma" />
                    <Text text=" Join our community" />
                    <div className={footerStyles.footerIcons}>
                        <IconDC />
                        <IconYT />
                        <IconTwitter />
                        <IconInstagram />
                    </div>
                </div>
                <div className={footerStyles.footerContainer}>
                    <FooterTitle title="Explore" />
                    <div className={footerStyles.footerContainer}>
                        <Text text='Marketplace' />
                        <Text text='Rankings' />
                        <Text text='Connect a wallet' />
                    </div>
                </div>
                <div className={footerStyles.footerContainer}>
                    <FooterTitle title='Join our weekly digest' />
                    <Text text='Get exclusive promotions & updates straight to your inbox.' />
                    <div className={`${footerStyles.footerContainer} ${footerStyles.inputContainer}`}>
                        <input className={[footerStyles.inputFooter, footerStyles.Text].join(' ')} placeholder='Enter Your Email Address' type="text" />
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

export default Footer