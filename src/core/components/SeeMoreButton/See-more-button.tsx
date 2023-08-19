import styles from "./See-more-button.module.css";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";

export function SeeMoreButton() {
  const { isDark } = useContext(ThemeContext);

  return (
    <a
      href="https://github.com/oscarprdev?tab=repositories"
      target="_blank"
      className={`${styles.seeMore} ${
        isDark ? styles.darkBtn : styles.lightBtn
      }`}
    >
      See more
      <IconArrowUpRight size={20} className={styles.arrow} />
    </a>
  );
}
