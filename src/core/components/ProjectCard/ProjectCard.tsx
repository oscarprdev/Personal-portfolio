import styles from "./ProjectCard.module.css";
import { Project, ProjectsData } from "../../screens/Projects/utils/projects-data.ts";
import {useEffect, useRef, useState} from "react";
import ProjectCardSelected from "../ProjectCardSelected/ProjectCardSelected.tsx";

function ProjectCard({project, isDark}: {project: Project, isDark: boolean}) {
    const [cardSelected, setCardSelected] = useState<Project | null>(null);
    const cardRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (cardRef.current && !cardRef.current?.contains(event.target as HTMLElement)) {
            setCardSelected(null);
        }
    };

    const selectCard = (id: number) => {
        const project = ProjectsData.find(project => project.id === id)
        if (project) {
            setCardSelected(project);
        }
    };

    const setCardStyles = () => {
        return `
        ${styles.card} 
        ${styles[`box${project.id}`]} 
        ${isDark
            ? styles.dark
            : styles.light} 
        ${cardSelected?.id === project.id
            ? styles.selected
            : cardSelected
                ? styles.notSelected
                : "" }`
    }

    return <article
        ref={cardRef}
        key={project.id}
        onClick={() => selectCard(project.id)}
        className={`${setCardStyles()}`}>
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
            cardSelected && <ProjectCardSelected project={cardSelected} isDark={isDark} />
        }
    </article>
}

export default ProjectCard