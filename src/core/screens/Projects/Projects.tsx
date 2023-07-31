import styles from './Projects.module.css'
import {useContext} from "react";
import { ThemeContext } from "../../context/theme.context.tsx";
import { routes } from "../../routes";
import { ProjectsData} from "./utils/projects-data.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

function Projects() {
    const { isDark } = useContext(ThemeContext)

    return <section
        id={`${routes.projects.path}`}
        className={`${styles.projects} ${isDark ? styles.dark : styles.light}`}>
        {
            ProjectsData.map(project =>
            (<ProjectCard project={project}/>))
        }
    </section>
}

export default Projects