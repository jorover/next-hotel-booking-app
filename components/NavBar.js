import topbar from '../styles/Navbar.module.css'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu';


const NavBar = () => {

   

  return (
    <nav className={topbar.topbar}>
        <div className={topbar.topbarcontainer}>
            <article className={topbar.compLogo}>
                <h4> D-APARTMENTS </h4>
            </article>

            <ul className={ topbar.topnav }>
                    <li>
                        <Link href="/"> HOME </Link>
                    </li>

                    <li>
                        <Link href="/apartment"> APARTMENTS </Link>
                    </li>

                    <li>
                        <Link href="/tour"> TOUR </Link>
                    </li>

                    <li>
                        <Link href="/contact"> CONTACT </Link>
                    </li>

                    <li className="btn navbar-btn">
                        <Link href="/apartment"> BOOK </Link>
                    </li>
            </ul>

            <HamburgerMenu 
            hamburgerStyle = { topbar.hamBurgerMenu } 
            hamburgerImg = { topbar.hamburgerImg } 
            hamburgerNav ={ topbar.hamburgerNav}
            closeMenu = { topbar.closeMenu }
            menuContainer = { topbar.menuContainer }  /> 
        </div>
    </nav>
  )
}

export default NavBar