import { MenuBurguer } from './img/menuBurguer'
import { IconUser } from './img/iconUser'
import { Logo } from './logo';

import './header.css';

export function Header() {
    return (
        <header className='header-container'>
            <Logo />
            <nav className='menu-header'>
                <a>Marketplace</a>
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