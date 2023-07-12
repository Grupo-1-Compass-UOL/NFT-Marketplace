import { MenuBurguer } from '../img/menuBurguer'
import { IconUser } from '../img/iconUser'
import { Logo } from '../logo/logo'

import headerStyles from './header.module.css';

export function Header() {
    return (
        <header className={headerStyles.headerContainer}>
            <Logo isFooter={false} />
            <nav className={headerStyles.menuHeader}>
                <a>Marketplace</a>
                <a href="">Rankings</a>
                <a href="">Connect a wallet</a>
                <button className={headerStyles.btnMenu}> <IconUser />Sign up</button>
            </nav>
            <div className={headerStyles.menuBurguer}>
                <MenuBurguer />
            </div>
        </header >
    );
}