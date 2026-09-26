import Image from 'next/image';
import styles from './singlePost.module.css'

const SinglePostPage = () => {
   return(
     <div className={styles.container}>
        <div className={styles.ImageContainer}>
            <Image src = "https://images.pexels.com/photos/6224289/pexels-photo-6224289.jpeg" 
            alt="blog-img" 
            className={styles.img}
            height={400}
            width={170}/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
                  <Image
                     src='/about.png'
                     alt="avatar"
                     className={styles.avatar}
                     width={50} 
                     height={50}
                  />
                  <div className={styles.detailText}>
                     <span className={styles.detailTitle}>Author</span>
                     <span className={styles.detailValue}>Sourav Swain</span>
                  </div>
                  <div className={styles.detailText}>
                     <span className={styles.detailTitle}>Published</span>
                     <span className={styles.detailValue}>26/09/2026</span>
                  </div>
            </div>
            <div className={styles.content}>
                 Lorem, ipsum dolar sit amet
            consectetur elit. Vero blanditid adipsci minima reiciendia a 
            autum assumenda dolore.
            </div>
        </div>
    </div>
   )
}

export default SinglePostPage;