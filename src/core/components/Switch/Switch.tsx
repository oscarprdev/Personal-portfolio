import styles from "./Switch.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

function Switch() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.switch} ${
        isDark ? styles.switchDark : styles.switchLight
      }`}
      onClick={() => toggleTheme(isDark)}
    >
      <span className={`${isDark ? styles.dark : styles.light}`}>
        {isDark ? <IconMoon /> : <IconSun />}
      </span>
    </div>
  );
}

export default Switch;
