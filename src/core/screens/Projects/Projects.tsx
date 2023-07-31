import { ProjectsData } from "./utils/projects-data.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import styles from "./Projects.module.css";

function Projects() {
    const {isDark} = useContext(ThemeContext)

    return <>
        <header className={styles.header}>
            <h2 className={`${styles.title} ${isDark ? styles.darkTitle : styles.lightTitle}`}>BEST PROJECTS</h2>
            <a href="https://github.com/oscarprdev?tab=repositories" target="_blank" className={`${styles.seeMore} ${isDark ? styles.darkBtn : styles.lightBtn}`}>
                See more
            </a>
        </header>
        <div className={`${styles.cardsContainer} `}>
            {
                ProjectsData.map(project =>
                    (<ProjectCard key={project.id} project={project} isDark={isDark}/>))
            }
        </div>
    </>
}

export default Projects