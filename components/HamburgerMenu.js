import { useState } from 'react'
import Image from 'next/image'
import Menu from '../public/Images/menu.png'
import Link from 'next/link'




const HamburgerMenu = ({ hamburgerStyle, hamburgerImg, hamburgerNav, closeMenu, menuContainer } ) => {

    const [toggle, setToggle] = useState(closeMenu);

    const toggleMenu = () => {
        if(toggle === hamburgerStyle){
            setToggle(closeMenu)
        } else {
            setToggle(hamburgerStyle)
        }
    }
    



  return (
    <figure className={menuContainer}>
        <Image src = {Menu} className={hamburgerImg} alt="hamburger Icon" onClick = {toggleMenu}/>
        <figcaption className={ toggle }>
            <div className="container">
                <ul className={hamburgerNav}>
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
            </ul>

            </div>
        </figcaption>
    </figure>
  )
}

export default HamburgerMenu