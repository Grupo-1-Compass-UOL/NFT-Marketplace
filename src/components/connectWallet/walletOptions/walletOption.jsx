import { ButtonWallet } from "../buttonWallet/buttonWallet";
import {WalletConnect} from "../../../assets/images/img/WalletConnect";
import { Metamask } from "../../../assets/images/img/metamask"
import CoinBase from "../../../assets/images/img/Coinbase"
import styles from './WalletOption.module.css';


export function WalletOptions() {
    const walletSvg = WalletConnect();
    const metamask = Metamask();
    const coinbase = CoinBase();

    return (
        <div className={styles.btnOptions}>
            <ButtonWallet name="Metamask" image={metamask} />
            <ButtonWallet name="Wallet Connect" image={walletSvg} />
            <ButtonWallet name="Coinbase" image={coinbase} />
        </div>

    )
}