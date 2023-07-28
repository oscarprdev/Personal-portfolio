import styles from "./Home.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";

function Home() {
    const {isDark} = useContext(ThemeContext)

    return <section id={`${routes.home.path}`} className={`${styles.home} ${isDark ? styles.dark : styles.light}`}>
        <h2>Hello</h2>
        <p>
            I'm <span>Oscar</span>,
            currently working as <span>frontend developer</span> at
            <span> Adhara</span>
        </p>
        <span className={styles.scrollDot}></span>
    </section>
}

export default Home

