import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
   return(
     <div>
        <div className={styles.imgContainer}>
         <Image src='/about.png' alt="about_img" width={300} height={300}/>
        </div>
    </div>
   )
}

export default AboutPage;