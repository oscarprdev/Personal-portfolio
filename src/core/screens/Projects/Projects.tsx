import styles from './Projects.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";

function Projects() {
    const {isDark} = useContext(ThemeContext)

    return <section id={`${routes.projects.path}`}  className={`${styles.projects} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.box1}>Box 1</div>
        <div className={styles.box2}>Box 2</div>
        <div className={styles.box3}>Box 3</div>
        <div className={styles.box4}>Box 4</div>
    </section>
}

export default Projects