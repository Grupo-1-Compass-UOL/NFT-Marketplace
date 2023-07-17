import styles from "./Marketplace.module.css"
import CardNFT from "../components/NFTCards/CardNFT/CardNFT.jsx";
import foxyLifeImage from "../assets/images/foxyLife.jpg";
import avatarNFT from "../assets/images/avatar/avatarNFT.png";
import Headline from "../components/Headline/Headline.jsx";
import SearchInput from '../components/SearchInput/SearchInput.jsx';

const Marketplace = () => {
  return (
    <>
      <Headline title="Marketplace" description="Check out the latest NFTs on the NFT Marketplace." />
      <div className={styles.search_wrapper}>
        <SearchInput />
      </div>
      <div className={styles.list_nft}>
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
        <CardNFT
          image={foxyLifeImage}
          title={'Foxy Life'}
          price={'1.63'}
          bid={'0.33'}
          avatar={avatarNFT}
          creator={'Orbitian'}
          backgroundColor={'#3b3b3b'}
        />
      </div>
    </>
  )
}

export default Marketplace
