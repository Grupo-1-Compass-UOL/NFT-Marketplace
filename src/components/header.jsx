import { MenuBurguer } from './img/menuBurguer'
import { LogoIcon } from './img/logoIcon'

export function Header() {
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <LogoIcon />
                <img src="./nav-nav-storefront" alt="" />
                <h5 className='logo-title'>NFT Marketplace</h5>
            </div>
            <MenuBurguer />
        </header>
    );
}