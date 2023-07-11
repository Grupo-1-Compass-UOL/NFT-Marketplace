import { LogoIcon } from '../img/logoIcon';
import logoStyles from './logo.module.css';

export function Logo() {
    return (
        <div className={logoStyles.logoContainer}>
            <LogoIcon />
            <img src="./nav-nav-storefront" alt="" />
            <h5 className={logoStyles.logoTitle}>
                NFT Marketplace
            </h5>
        </div>
    );
}

