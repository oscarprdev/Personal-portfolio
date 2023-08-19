import { ProjectsData } from "./utils/projects-data.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";
import styles from "./Projects.module.css";
import { SeeMoreButton } from "../../components/SeeMoreButton/See-more-button.tsx";

function Projects() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <header className={styles.header}>
        <h2
          className={`${styles.title} ${
            isDark ? styles.darkTitle : styles.lightTitle
          }`}
        >
          BEST PROJECTS
        </h2>
        <div className={styles.seeMoreDesktop}>
          <SeeMoreButton />
        </div>
      </header>
      <div className={`${styles.cardsContainer} `}>
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} isDark={isDark} />
        ))}
      </div>
      <div className={styles.seeMoreMobile}>
        <SeeMoreButton />
      </div>
    </>
  );
}

export default Projects;
