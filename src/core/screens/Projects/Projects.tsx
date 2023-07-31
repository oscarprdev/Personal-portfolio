import { ProjectsData } from "./utils/projects-data.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";

function Projects() {
    const {isDark} = useContext(ThemeContext)

    return <>
        {
            ProjectsData.map(project =>
            (<ProjectCard key={project.id} project={project} isDark={isDark}/>))
        }
    </>
}

export default Projects