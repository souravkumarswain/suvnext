import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
   return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
               <h2 className={styles.title}>About Agency</h2>
               <h1 className={styles.subtitle}>We create digital ideas that are bigger, bolder, brave and better</h1>
               <p className={styles.desc}>
                  We create digital ideas that are bigger, bolder, brave and better. We
                  believe in good ideas flexibility and precission We're world's our special
                  team best consulting and finance solution provider. Wide range of
                  web and software develpment services
               </p>
               <div className={styles.boxes}>
                  <div className={styles.box}>
                     <h1>10 K+</h1>
                     <p>Year of experience</p>
                  </div>
                  <div className={styles.box}>
                     <h1>10 K+</h1>
                     <p>Year of experience</p>
                  </div>
                  <div className={styles.box}>
                     <h1>10 K+</h1>
                     <p>Year of experience</p>
                  </div>
               </div>
            </div>
            <div className={styles.imgContainer}>
               <Image 
               src='/about.png'
               alt="about img"
               fill
               className={styles.img}
               />
            </div>
        </div>
   )
}

export default AboutPage;