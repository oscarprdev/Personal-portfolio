import {Project} from "../../screens/Projects/utils/projects-data.ts";
import styles from './ProjectCardSelected.module.css'

function ProjectCardSelected({project, isDark}: {project: Project, isDark: boolean}) {
    return <article className={`${styles.cardSelected} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.imagesContainer}>
            <div className={styles.image1}></div>
            <div className={styles.image2}></div>
            <div className={styles.image3}></div>
        </div>
    </article>
}

export default ProjectCardSelected