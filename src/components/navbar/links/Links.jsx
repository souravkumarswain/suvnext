import Link from 'next/link'
import React from 'react'

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
        <div>
            {
                headerLinks.map((eachLink) => 
                <Link key={eachLink.title} href={eachLink.path}>
                    {eachLink.title}
                </Link>)
            }
        </div>
    )
}

export default Links