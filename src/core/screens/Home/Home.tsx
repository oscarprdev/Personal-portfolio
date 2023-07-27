import styles from "./Home.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";

function Home() {
    const {isDark} = useContext(ThemeContext)

    return <section className={`${styles.home} ${isDark ? styles.dark : styles.light}`}>
        <h2>Hello</h2>
        <p>
            I'm <span>Oscar Perez Romero</span>, 
            with 1 year of experience as <span>frontend developer</span> currently working at 
            <span> Adhara</span>
        </p>
    </section>
}

export default Home

