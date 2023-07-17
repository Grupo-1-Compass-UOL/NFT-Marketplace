import ListCardp from './ListCardp.css'
import naveEpes from '../../assets/images/naveEpes.png';
import lifeOnEdena from '../../assets/images/lifeOnEdena.png';
import astroFiction from '../../assets/images/astroFiction.png';
import cryptoCity from '../../assets/images/cryptoCity.png';
import colorfulDog from '../../assets/images/colorfulDog.png';
import spaceTales from '../../assets/images/spaceTales.png';
import cherryBlossom from '../../assets/images/cherryBlossom.png';
import dancingRobot03560987 from '../../assets/images/dancingRobot03560987.jpg';
import iceCreamApe from '../../assets/images/iceCreamApe.png';
import avatar from '../../assets/images/avatar/avatar.png';
import CardNFT from '../NFTCards/CardNFT/CardNFT';

const ListCard =()=>{
    return(
        <ul className={ListCardp.listNFT}>
        <h1 className={ListCardp.titleMoreNFT}>More from this artist</h1>
        <div className={ListCardp.itemsList}>
          <li className={ListCardp.itemsNFTmobile}>
            <CardNFT
              image={naveEpes}
              title={'naveEpes'}
              price={'1.63'}
              bid={'0.33'}
              avatar={avatar}
              creator={'Animakid'}
              backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTdesktop}>
            <CardNFT
                 image={lifeOnEdena}
                 title={'Life On Edena'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
          
            />
          </li>
          <li className={ListCardp.itemsNFTdesktop}>
            <CardNFT
                 image={astroFiction}
                 title={'AstroFiction'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTmobile}>
            <CardNFT
                 image={cryptoCity}
                 title={'CryotiCity'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTdesktop}>
            <CardNFT
                 image={colorfulDog}
                 title={'ColorfulDog 0524'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTdesktop}>
            <CardNFT
                 image={spaceTales}
                 title={'Space Tales'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTtablet}>
            <CardNFT
                 image={cherryBlossom}
                 title={'Cherry Blossom Girl 037'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
          <li className={ListCardp.itemsNFTtablet}>
            <CardNFT
                 image={dancingRobot03560987}
                 title={'Dancing Robot 0987'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
          
            />
          </li>
          <li className={ListCardp.itemsNFTtablet}>
            <CardNFT
                 image={iceCreamApe}
                 title={'IceCream Ape'}
                 price={'1.63'}
                 bid={'0.33'}
                 avatar ={avatar}
                 creator ={'Animakid'}
                 backgroundColor={'#3b3b3b'}
            />
          </li>
        </div>
      </ul>
  
    );
  };    
export default ListCard;