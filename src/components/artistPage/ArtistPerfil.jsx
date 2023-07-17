
import Globe from '../../assets/images/Globe.png';
import TwitterLogo from '../../assets/images/twitterLogo.png';
import YoutubeLogo from '../../assets/images/youtubeLogo.png';
import DiscordLogo from '../../assets/images/discordLogo.png';
import instagramLogo from '../../assets/images/instagramLogo.png';
import Copy from '../../assets/images/copy.png';
import Plus from '../../assets/images/plus.png';

export default function ArtistPerfil(){
    return(
        <div>
            <div className='artistInfo'>
                <h4 className='animakid'>Animakid</h4>
                <button className='doc'><img src={Copy} alt="Copy"></img>0xc0e3...b79c</button>
                <button className='follow'> <img src={Plus} alt="Plus"></img> Follow</button>
            </div>
                <div className='info'>
                    <h3>250k+</h3>
                    <h3>50+</h3>
                    <h3>3000+</h3>
                </div>
                <div className='text'>
                    <p>Volume</p>
                    <p>NFTs Sold</p>
                    <p>Followers</p>
                </div>

                <div className='bioB'>
                    <p className='bio'>Bio</p>
                    <p className='kid'>The internets fruendliest designer kid.</p>
                </div>

                <div className='links'>
                    <p className='link'>Link</p>
                    <ul>
                        <li> <img src={Globe} alt="Globe"/></li>
                        <li> <img src={TwitterLogo} alt="TwitterLogo"/></li>
                        <li> <img src={YoutubeLogo} alt="YoutubeLogo"/></li>
                        <li> <img src={DiscordLogo} alt="DiscordLogo"/></li>
                        <li> <img src={instagramLogo} alt="instagramLogo"/></li>
                    </ul>
                </div>
        </div>
    )
}