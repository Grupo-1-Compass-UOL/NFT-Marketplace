import TabBar from '../components/TabBar/TabBar';
import {TopCreatorList} from '../components/TopCreatorList';
import styles from './Rankings.module.css';

const creators = [
  {
    position: 1,
    image: {
      src: "",
      alt: ""
    },
    name: "John Doe",
    change: "+10%",
    numberSold: 100,
    volumeSold: "$1000"
  },
  {
    position: 2,
    image: {
      src: "",
      alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
  {
    position: 3,
    image: {
      src: "",
      alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
  {
    position: 4,
    image: {
      src: "",
      alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
];

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
