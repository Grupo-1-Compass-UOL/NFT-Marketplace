import styles from './Works.module.css'
import InfoCard from './InfoCard';

const Works = () => {
    return (
        <div className={styles.works}>
            <div className={styles.Headline}>
                <h4>How it works</h4>
                <p>Find out how to get started</p>
            </div>
            <div className={styles.CardRow}>
                <InfoCard title='Setup Your wallet' text='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.' />
                <InfoCard title='Create Collection' text='Upload your work and setup your collection. Add a description, social links and floor price.' />
                <InfoCard title='Start Earning' text='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.' />

            </div>
        </div>
    )
}

export default Works