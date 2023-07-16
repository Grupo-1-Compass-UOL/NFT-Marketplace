import styles from '../createAccount/createAccount.module.css';
import { Text } from '../text/text';
import { WalletOptions } from './walletOptions/walletOption';
import { TitleCreateAccount } from '../titleCreateAccount/titleCreateAccount';
import Nave from '../../assets/images/nave.jpg'

export function ConnectWallet() {
    return (
        <div className={styles.createAccountContainer}>
            <div className='imageContainer'>
                <img src={Nave} className={styles.imgCreateAccount} alt="" />
            </div>
            <div className={styles.createForm}>
                <div className={styles.headlineContainer}>
                    <TitleCreateAccount title='Connect Wallet' />
                    <Text text='Choose a wallet you want to connect.
                     There are several wallet providers.' />
                    <WalletOptions />
                </div>
            </div>
        </div>
    )
}