import styles from "./Post.module.css";
import { type PostInfo } from "../../screens/Blog/utils/PostInfo.ts";

function Post({post, index}: { post: PostInfo, index: number }) {
    return <article className={styles.post} style={{ animationDelay: `${index * 0.4}s`}}>
        <a href={post.href} target="_blank">
            <h3>{post.title}</h3>
        </a>
        <div className={styles.postInfo}>
            <h4>{post.date}</h4>
            <span></span>
            <h4>{post.time}</h4>
        </div>
        <p>{post.description}</p>
    </article>
}

export default Post