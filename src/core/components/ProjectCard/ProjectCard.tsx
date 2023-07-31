import styles from "../../screens/Projects/Projects.module.css";
import {Project, ProjectsData} from "../../screens/Projects/utils/projects-data.ts";
import { useState} from "react";
import ProjectCardHovered from "../ProjectCardHovered/ProjectCardHovered.tsx";

function ProjectCard({project}: {project: Project}) {
    const [cardHovered, setCardHovered] = useState<Project | null>(null);

    const handleCardHover = (id: number) => {
        const project = ProjectsData.find(project => project.id === id)
        setCardHovered(project);
    };

    const handleCardHoverEnd = () => {
        setCardHovered(null);
    };
    return <article
        key={project.id}
        onMouseEnter={() => handleCardHover(project.id)}
        onMouseLeave={handleCardHoverEnd}
        className={`${styles.card} ${styles[`box${project.id}`]} ${cardHovered?.id === project.id ? styles.hovered : cardHovered ? styles.notHovered : "" }`}>
        <h3 className={styles.order}>{project.id}</h3>
        <h4 className={styles.title}>{project.title}</h4>
        <h5 className={styles.date}>{project.date}</h5>
        <div className={styles.stack}>
            {
                project.icons.map((icon, id) =>
                    (<div
                        key={id}
                        className={`${styles.iconContainer} ${icon.isModified && `${styles.iconModifier}`}`}>
                        {icon.svg}
                    </div>))
            }
        </div>
        {
            cardHovered && <ProjectCardHovered project={cardHovered} />
        }
    </article>
}

export default ProjectCard