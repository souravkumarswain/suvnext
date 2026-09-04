"use client"

import Link from 'next/link'
import React from 'react'
import styles from './NavLink.module.css'
import { usePathname } from 'next/navigation'

const NavLink = ({title,path}) => {
    const pathName = usePathname()
  return (
    <div>
        <Link href={path} className={`${styles.container} 
            ${pathName === path && styles.active}
        `}>
            {title}
        </Link>
    </div>
  )
}

export default NavLink