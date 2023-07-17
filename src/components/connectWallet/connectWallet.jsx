import styles from './ConnectWallet.module.css';
import { Text } from '../text/text';
import { WalletOptions } from './walletOptions/walletOption';
import { TitleCreateAccount } from '../CreateAccount/TitleCreateAccount/TitleCreateAccount';
import Nave from '../../assets/images/nave.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export function ConnectWallet() {
    return (
        <main>
            <Header />
            <div className={styles.connectWalletContainer}>
                <div className={styles.imageContainer}>
                    <img src={Nave} className={styles.imgConnectWallet} alt="" />
                </div>
                <div className={styles.createForm}>
                    <div className={styles.headlineContainer}>
                        <TitleCreateAccount title='Connect Wallet' />
                        <Text color="white" isSize={true} text='Choose a wallet you want to connect.
                     There are several wallet providers.' />
                        <WalletOptions />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}