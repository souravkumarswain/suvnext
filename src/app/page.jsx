import React from 'react'
import styles from './home.module.css'
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thought Agency</h1>
          <p className={styles.desc}>Lorem, ipsum dolar sit amet
            consectetur elit. Vero blanditid adipsci minima reiciendia a 
            autum assumenda dolore.
          </p>
          <div className={styles.buttons}>
              <button className={styles.button}>Learn More</button>
              <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image src='/brands.png' alt="brands" width={500} height={50}/>
          </div>
      </div>
      <div className={styles.imgContainer}>
          <Image src='/hero.gif' alt="hero" width={350} height={350}/>
      </div>
    </div>
  )
}

export default Home;