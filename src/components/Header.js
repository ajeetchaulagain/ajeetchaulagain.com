import React from 'react'
import {Link} from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () =>{
    return (
        <header className={headerStyles.header}>
            <h1>
            <Link to="/" className={headerStyles.title}>Ajeet Chaulagain</Link></h1>
            <nav>
                <ul className={headerStyles.navList} >
                    <li>
                        <Link className={headerStyles.navItem} to = "/" activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to = "/blog" activeClassName={headerStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to = "/about" activeClassName={headerStyles.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to = "/contact" activeClassName={headerStyles.activeNavItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
