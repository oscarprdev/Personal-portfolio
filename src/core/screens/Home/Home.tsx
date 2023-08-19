import styles from "./Home.module.css";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

function Home() {
  return (
    <>
      <h2 className={styles.title}>Hello</h2>
      <p className={styles.textContainer}>
        I'm <span>Oscar</span>, currently working as{" "}
        <span>frontend developer</span> at
        <span> Adhara</span>
      </p>
      <span className={styles.scrollDot}></span>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/oscarperez8/" target="_blank">
          <IconBrandLinkedin size={40} stroke={1} className={styles.icon} />
        </a>
        <a href="https://github.com/oscarprdev" target="_blank">
          <IconBrandGithub size={40} stroke={1} className={styles.icon} />
        </a>
      </div>
    </>
  );
}

export default Home;
