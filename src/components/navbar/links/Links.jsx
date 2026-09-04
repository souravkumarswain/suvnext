import Link from 'next/link'
import React from 'react'
import styles from './links.module.css'
import NavLink from './navLinks/NavLink'

const Links = () => {
    const headerLinks = [
    {
        title: "Homepage",
        path: '/'
    },
    {
        title: "About",
        path: '/about'
    },
    {
        title: "Contact",
        path: '/contact'
    },
    {
        title: "Admin",
        path: '/admin'
    },
    {
        title: "Blog",
        path: '/blog'
    }]
    return (
        <div className={styles.links}>
            {
                headerLinks.map((eachLink) => <NavLink key = {eachLink.title} title={eachLink.title} path={eachLink.path}/>)
            }
        </div>
    )
}

export default Links