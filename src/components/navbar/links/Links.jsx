"use client"
import Link from 'next/link'
import React, { useState } from 'react'
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
        title: "Blog",
        path: '/blog'
    }]

    const [open,setOpen] = useState(false)

    let sessions = true;
    let admin = true;
    return (
        <div>
        <div className={styles.links}>
            {
                headerLinks.map((eachLink) => <NavLink key = {eachLink.title} title={eachLink.title} path={eachLink.path}/>)
            }
            {
                sessions ? 
                (
                <>
                    {admin && <NavLink  path="/admin" title="Admin"/>}
                    <button className={styles.logout}>Logout</button>
                </>
                ) : 
                (
                    <NavLink path="/login" title="Login"/>
                )
            }
        </div>
        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && (
                <div className={styles.mobileLinks}>
                    {
                        headerLinks.map(eachLink => 
                        <NavLink key = {eachLink.title}
                            path={eachLink.path}
                            title = {eachLink.title}
                        />)
                    }
                </div>
            )
        }
        </div>
    )
}

export default Links