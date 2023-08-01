import styles from "./Post.module.css";
import { type PostInfo } from "../../screens/Blog/utils/PostInfo.ts";

function Post({post}: { post: PostInfo }) {
    return <article className={styles.post} style={{ animationDelay: "0.4s"}}>
        <h3>{post.title}</h3>
        <div className={styles.postInfo}>
            <h4>{post.date}</h4>
            <span></span>
            <h4>{post.time}</h4>
        </div>
        <p>{post.description}</p>
    </article>
}

export default Post