import PostCard from '@/src/components/postCard/PostCard';
import styles from './blog.module.css'

const BlogPrimary = () => {
   return(
     <div className={styles.container}>
      <div className={styles.post}>
         <PostCard/>
      </div>
      <div className={styles.post}>
         <PostCard/>
      </div>
      <div className={styles.post}>
         <PostCard/>
      </div>
      <div className={styles.post}>
         <PostCard/>
      </div>
        
    </div>
   )
}

export default BlogPrimary;