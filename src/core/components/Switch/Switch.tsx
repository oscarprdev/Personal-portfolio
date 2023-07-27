import styles from "./Switch.module.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";

function Switch() {
    const {isDark, toggleTheme} = useContext(ThemeContext)

    return <div className={`${styles.switch} ${isDark ? styles.switchDark : styles.switchLight}`} onClick={e => toggleTheme()}>
        <span className={`${isDark ? styles.dark : styles.light}`}></span>
    </div>
}   

export default Switch