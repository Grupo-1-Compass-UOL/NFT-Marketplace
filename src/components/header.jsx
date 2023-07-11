import { MenuBurguer } from './img/menuBurguer'
import { LogoIcon } from './img/logoIcon'
import { IconUser } from './img/iconUser'
import './header.css';

export function Header() {
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <LogoIcon />
                <img src="./nav-nav-storefront" alt="" />
                <h5 className='logo-title'>NFT Marketplace</h5>
            </div>
            <nav className='menu-header'>
                <a href="">Marketplace</a>
                <a href="">Rankings</a>
                <a href="">Connect a wallet</a>
                <button className='btn-menu'> <IconUser />Sign up</button>
            </nav>
            <div className='menu-burguer'>
                <MenuBurguer />
            </div>
        </header >
    );
}