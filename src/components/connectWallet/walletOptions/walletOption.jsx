import { ButtonWallet } from "../buttonWallet/buttonWallet";
import { Wallet } from "../../img/wallet";
import { Metamask } from "../../img/metamask"
import { Coinbase } from "../../img/coinBase"
import styles from './WalletOption.module.css';


export function WalletOptions() {
    const walletSvg = Wallet();
    const metamask = Metamask();
    const coinbase = Coinbase();

    return (
        <div className={styles.btnOptions}>
            <ButtonWallet name="Metamask" image={metamask} />
            <ButtonWallet name="Wallet Connect" image={walletSvg} />
            <ButtonWallet name="Coinbase" image={coinbase} />
        </div>

    )
}