import TabBar from '../components/TabBar/TabBar';
import {TopCreatorList} from '../components/TopCreatorList';
import styles from './Rankings.module.css';

const creators = [];

for (let i = 0; i < 20; i++) {
  let obj = {
    position: i + 1,
    image: {
      src: "",
      alt: ""
    },
    name: "Jane Smith",
    change: "+1.41%",
    numberSold: 602,
    volumeSold: "12.4 ETH"
  };
  creators.push(obj);
}


const Rankings = () => {
  return (
    <>
      <div className={styles.headline}>
        <h1>Top Creators</h1>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <TabBar tabs={['1d', '7d', '30d', 'All Time']} defaultTab="Top Sellers" />
      <TopCreatorList creators={creators} />
    </>
  )
}

export default Rankings;
