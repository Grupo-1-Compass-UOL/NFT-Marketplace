

import classes from './listcards.module.css';
import CardNFT from '../../NFTCards/CardNFT/CardNFT';
import foxyLifeImage from '../../../assets/images/foxyLife.jpg';
import catFromFuture from '../../../assets/images/catFromFuture.jpg'
import psychoDog from '../../../assets/images/psychoDog.jpg'
import designerBear from '../../../assets/images/designerBear.jpg'
import dancingRobot0375 from '../../../assets/images/dancingRobot0375.jpg'
import dancingRobot0356 from '../../../assets/images/dancingRobot0356-0987.jpg'
import dancingRobot0521 from '../../../assets/images/dancingRobot0521.jpg'
import dancingRobot0512 from '../../../assets/images/dancingRobot0521.jpg'
import dancingRobot0024 from '../../../assets/images/dancingRobot0024.jpg'
import avatarNFT from '../../../assets/images/avatar/avatarNFT.png';


const ListCards = () => {

  return (
    <ul className={classes.listNFT}>
      <li>
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1,63'}
          bid={'0.33'} 
          avatar={avatarNFT}
          creator={'creator'}
        />
      </li>
      <li>
        <CardNFT
             image={catFromFuture}
             title={'Cat From Future'}
             price={'1.63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={psychoDog}
             title={'Psycho Dog'}
             price={'1.63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={designerBear}
             title={'DesignerBear'}
             price={'1.63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={dancingRobot0375}
             title={'Dancing Robot 0375'}
             price={'1,63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={dancingRobot0356}
             title={'Dancing Robot 0356'}
             price={'1,63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={dancingRobot0521}
             title={'Dancing Robot 0521'}
             price={'1,63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={dancingRobot0512}
             title={'Dancing Robot 0512'}
             price={'1,63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
      <li>
        <CardNFT
             image={dancingRobot0024}
             title={'Dancing Robot 0024'}
             price={'1,63'}
             bid={'0.33'} 
             avatar ={avatarNFT}
             creator ={'creator'}
          
        />
      </li>
    </ul>
  );
};

export default ListCards;
