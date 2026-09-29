import PostCard from '@/src/components/postCard/PostCard';
import styles from './blog.module.css'

const getPost = async () => {
   let res = await fetch("https://jsonplaceholder.typicode.com/posts")
   if (!res.ok) {
      throw new Error("Fetch issue is occuring")
   }
   return res.json()
}
const BlogPrimary = async () => {
   let posts = await getPost();
   return (
      <div className={styles.container}>
         {
            posts.map(post =>
               <div className={styles.post} key={post.id}>
                  <PostCard post={post} />
               </div>
            )}
      </div>
   )
}

export default BlogPrimary;