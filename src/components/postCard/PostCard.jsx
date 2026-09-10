import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/6224289/pexels-photo-6224289.jpeg" alt="post" fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.2026</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem, ipsum dolar sit amet
            consectetur elit. Vero blanditid adipsci minima reiciendia a 
            autum assumenda dolore.</p>
            <Link href="/blog/post" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard