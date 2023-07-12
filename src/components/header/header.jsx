import { MenuBurguer } from '../../assets/images/img/menuBurguer'
import { IconUser } from '../../assets/images/img/iconUser'
import { Logo } from '../logo/logo'

import Styles from './Header.module.css';

function Header() {
    return (
        <header className={Styles.headerContainer}>
            <Logo />
            <nav className={Styles.menuHeader}>
                <a>Marketplace</a>
                <a href="">Rankings</a>
                <a href="">Connect a wallet</a>
                <button className={Styles.btnMenu}> <IconUser />Sign up</button>
            </nav>
            <div className={Styles.menuBurguer}>
                <MenuBurguer />
            </div>
        </header >
    );
}

export default Header