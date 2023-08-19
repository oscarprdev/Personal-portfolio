import { Project } from "../../screens/Projects/utils/projects-data.ts";
import styles from "./ProjectCardSelected.module.css";
import { IconCode } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";

function ProjectCardSelected({
  project,
  isDark,
}: {
  project: Project;
  isDark: boolean;
}) {
  return (
    <article
      className={`${styles.cardSelected} ${
        isDark ? styles.dark : styles.light
      }`}
    >
      <div className={styles.navContainer}>
        <a
          href={project.links.code}
          target="_blank"
          className={`${styles.codeBtn} ${
            isDark ? styles.darkBtn : styles.lightBtn
          }`}
        >
          <IconCode size={30} />
          Source code
        </a>
        <a
          href={project.links.app}
          target="_blank"
          className={`${styles.viewBtn} ${
            isDark ? styles.darkViewBtn : styles.lightViewBtn
          }`}
        >
          <IconEye size={30} />
          View demo
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src={project.image} alt="project image" />
      </div>
      <p
        className={`${styles.description} ${
          isDark ? styles.darkDescription : styles.lightDescription
        }`}
      >
        {project.description}
      </p>
      <div
        className={`${styles.dots} ${
          isDark ? styles.dotsDark : styles.dotsLight
        }`}
      >
        {Array(16)
          .fill("")
          .map((_, id) => (
            <span key={id}></span>
          ))}
      </div>
    </article>
  );
}

export default ProjectCardSelected;
