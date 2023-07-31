import {Project} from "../../screens/Projects/utils/projects-data.ts";

function ProjectCardHovered({project}: {project: Project}) {
    return <div>
        {
            project.title
        }
    </div>
}

export default ProjectCardHovered