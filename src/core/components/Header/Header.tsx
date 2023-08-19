import styles from "./Header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1 className={`${isDark ? styles.titleDark : styles.titleLight}`}>
        Oscar Perez Romero
      </h1>
    </header>
  );
}

export default Header;
