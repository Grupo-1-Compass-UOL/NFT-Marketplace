import styles from './DiscoverMore.module.css'
import CardNFT from '../../../components/NFTCards/CardNFT/CardNFT';
import Ship from '../../../assets/images/ship.png'
import She from '../../../assets/images/she.png'
import Skye from '../../../assets/images/sky.png'
import NebulaKid from '../../../assets/images/nebulakid.png'
import AstroFic from '../../../assets/images/astrofic.png'
import Spaceone from '../../../assets/images/spaceone.png'
import Eye from '../../../assets/images/Eye.png'



const DiscoverMore = () => {
    return (
        <div className={styles.discoverMore}>
            <div className={styles.HeadlineDesktop}>
                <div className={styles.Headline}>
                    <h4>Discover More NFTs</h4>
                    <p>Explore new trending NFTs</p>
                </div>
                <button className={styles.btnDiscover}><img src={Eye} alt="" />See All</button>
            </div>
            <div className={styles.CardsSection}>
                <div className={styles.CardContainer}>
                    <CardNFT
                        image={Ship}
                        title={"Distant Galaxy"}
                        price={"1.63 ETH"} bid={"0.33 wETH"}
                        avatar={She}
                        creator={'MoonDancer'}
                        backgroundColor={"#333333"} />
                </div>
                <div className={styles.CardContainer}>
                    <CardNFT
                        image={Skye}
                        title={"Life on Edena Galaxy"}
                        price={"1.63 ETH"} bid={"0.33 wETH"}
                        avatar={NebulaKid}
                        creator={'NebulaKid'}
                        backgroundColor={"#333333"} />
                </div>
                <div className={styles.DisplayAstro}>
                    <CardNFT
                        image={AstroFic}
                        title={"AstroFiction"}
                        price={"1.63 ETH"} bid={"0.33 wETH"}
                        avatar={Spaceone}
                        creator={'Spaceone'}
                        backgroundColor={"#333333"} />
                </div>

            </div>
            <button className={styles.btnBottom}><img src={Eye} alt="" />See All</button>
        </div>
    )
}

export default DiscoverMore 