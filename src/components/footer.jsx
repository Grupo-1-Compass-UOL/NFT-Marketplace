import { Logo } from './logo';
import { IconDC } from './img/iconDiscord';
import { IconYT } from './img/iconYoutube';
import { IconTwitter } from './img/iconTwitter';
import { IconIntagram } from './img/iconInstragram';
import { IconEmail } from './img/iconEmail';
import { FooterText } from './footerText';
import { Title } from './title';
import './footer.css'
import './title.css'


export function Footer() {
    return (
        <div className='footer-info'>
            <div className='footer-container'>
                <Logo isFooter={true} />
                <FooterText text="NFT marketplace UI created with Anima for Figma" />
                <FooterText text=" Join our community" />
                <div className='footer-icons'>
                    <IconDC />
                    <IconYT />
                    <IconTwitter />
                    <IconIntagram />
                </div>
            </div>
            <div className='footer-container'>
                <Title title="Explore" />
                <div className='footer-container'>
                    <FooterText text='Marketplace' />
                    <FooterText text='Rankings' />
                    <FooterText text='Connect a wallet' />
                </div>
            </div>
            <div className='footer-container'>
                <Title title='Join our weekly digest' />
                <FooterText text='Get exclusive promotions & updates straight to your inbox.' />
                <div className='footer-container'>
                    <input className='inputFooter footer-text' placeholder='Enter Your Email Address' type="text" />
                    <button className='btn-footer'><IconEmail /> Subscribe</button>
                </div>
            </div>
            <div className='footer-container'>
                <hr className="footer-line" />
                <p className='footer-message'>Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </div>
    )
}