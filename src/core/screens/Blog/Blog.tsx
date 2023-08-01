import styles from './Blog.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {PostInfo} from "./utils/PostInfo.ts";
import Post from "../../components/Post/Post.tsx";

function Blog() {
    const {isDark} = useContext(ThemeContext)

    return <>
        <h2 className={`${styles.title} ${isDark ? styles.darkTitle : styles.lightTitle}`}>BLOG</h2>
        <div className={styles.postsContainer}>
            {PostInfo.map(post => (<Post post={post} />))}
        </div>
    </>
}

export default Blog