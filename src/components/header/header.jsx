import { MenuBurguer } from "../../assets/images/img/menuBurguer";
import { IconUser } from "../../assets/images/img/iconUser";
import { Logo } from "../logo/logo";
import { Link } from "react-router-dom";
import Styles from "./header.module.css";

function Header() {
  return (
    <header className={Styles.headerContainer}>
      <Logo />
      <nav className={Styles.menuHeader}>
        <a>Marketplace</a>
        <Link to="/rankings">Rankings</Link>
        <Link to="/connectWallet">
          <a>Connect a wallet</a>
        </Link>
        <Link to="/createaccount">
        <button className={Styles.btnMenu}>
          {" "}
          <IconUser />
          Sign up
        </button>
        </Link>
      </nav>
      <div className={Styles.menuBurguer}>
        <MenuBurguer />
      </div>
    </header>
  );
}

export default Header;
