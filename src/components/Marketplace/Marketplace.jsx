import styles from './Marketplace.module.css'
import { FaSearch } from 'react-icons/fa';
import TabBar from './../TabBar/TabBar';
import CardNFT from './../NFTCards/CardNFT/CardNFT';
import Mushroom from '../../assets/images/Mush.png'
import Robot from '../../assets/images/Robot.png'
import Shroomie from '../../assets/images/Shroomie.png'
import BeKind2Robots from '../../assets/images/BeKind2Robots.png'
import Robot2 from '../../assets/images/Robot2.png'
import Bear from '../../assets/images/designerBear.jpg'
import MrFox from '../../assets/images/MrFox.png'
import Keepitreal from '../../assets/images/Keepitreal.png'
import ColorfulDog from '../../assets/images/colorfulDog.png'
import DacingRobot from "../../assets/images/dacingRobot0512.jpg"
import Robotica from "../../assets/images/Robotica.png"
import Blossom from "../../assets/images/cherryBlossom.png"
import MoonDancer from "../../assets/images/she.png"
import NebulaKid from "../../assets/images/nebulakid.png"
import Rocket from "../../assets/images/rocket.png"
import Dimension from "../../assets/images/Dimension.png"
import Dog from "../../assets/images/Dog.png"
import Desert from "../../assets/images/Desert.png"
import Ice from "../../assets/images/Ice.png"
import AnimaKid from "../../assets/images/AnimaKid.png"
import Catch from "../../assets/images/Catch.png"
import IceAvatar from "../../assets/images/IceAvatar.png"
import PuppyPower from "../../assets/images/PuppyPower.png"

const Marketplace = () => {
    return (
        <div className={styles.Headline}>
            <div className={styles.SubHeadline}>
                <div className={styles.SubHeadlineText}>
                    <h4>Browse Marketplace</h4>
                    <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" className={styles.inputMarketplace} placeholder='Search your favourite NFTs' />
                    <FaSearch className={styles.searchIcon} />
                </div>
            </div>
            <div className={styles.MarketplaceSection}>
                <div className={styles.TabBar}>
                    <TabBar tabs={['NFTs', 'Collections']} defaultTab="Marketplace" />
                </div>
                <div className={styles.CardSection}>
                    <div className={styles.CardRow}>
                        <div className={styles.Card}>
                            <CardNFT
                                image={Mushroom}
                                title={"Magic Mushroom 0324"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={Shroomie}
                                creator={'Shroomie'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div>
                            <CardNFT
                                image={Robot}
                                title={"Happy Robot 024"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={BeKind2Robots}
                                creator={'BeKind2Robots'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div>
                            <CardNFT
                                image={Robot2}
                                title={"Happy Robot 0324"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={BeKind2Robots}
                                creator={'BeKind2Robots'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div>
                            <CardNFT
                                image={Bear}
                                title={"Designer Bear"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={MrFox}
                                creator={'Mr Fox'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div>
                            <CardNFT
                                image={ColorfulDog}
                                title={"Colorful Dog 0324"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={Keepitreal}
                                creator={'Keepitreal'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay}>
                            <CardNFT
                                image={DacingRobot}
                                title={"Dancing Robot 0323"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={Robotica}
                                creator={'Robotica'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay}>
                            <CardNFT
                                image={Blossom}
                                title={"Cherry Blossom Girl 035"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={MoonDancer}
                                creator={'MoonDancer'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay}>
                            <CardNFT
                                image={Rocket}
                                title={"Space Travel"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={NebulaKid}
                                creator={'NebulaKid'}
                                backgroundColor={"#333333"} />
                        </div>

                        <div className={styles.CardDisplay2}>
                            <CardNFT
                                image={Dimension}
                                title={"Sunset Dimension"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={AnimaKid}
                                creator={'AnimaKid'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay2}>
                            <CardNFT
                                image={Desert}
                                title={"Desert Walk"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={Catch}
                                creator={'Catch 22'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay2}>
                            <CardNFT
                                image={Ice}
                                title={"IceCream Ape 0324"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={IceAvatar}
                                creator={'Ice Ape Club'}
                                backgroundColor={"#333333"} />
                        </div>
                        <div className={styles.CardDisplay2}>
                            <CardNFT
                                image={Dog}
                                title={"Colorful Dog 0344"}
                                price={"1.63 ETH"} bid={"0.33 wETH"}
                                avatar={PuppyPower}
                                creator={'PuppyPower'}
                                backgroundColor={"#333333"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace