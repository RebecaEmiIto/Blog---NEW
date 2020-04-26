import React from 'react'
import { Link, graphql,useStaticQuery } from 'gatsby'
import headerStyle from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link className={headerStyle.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Teck Stack</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/projetop">Projetos Pessoais</Link>
                    </li>
                     <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">Quem somos</Link>
                    </li>
                     <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/proble">Problemas</Link>
                     </li>
                </ul>
            </nav>      
        </header>
    )
}


export default Header