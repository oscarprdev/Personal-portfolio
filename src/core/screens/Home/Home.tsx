import styles from "./Home.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";

function Home() {
    const {isDark} = useContext(ThemeContext)

    return <section className={`${styles.home} ${isDark ? styles.dark : styles.light}`}>
        <h2>Hello</h2>
        <p>
            My name is <span>Oscar Perez</span> and I am
            currently working as <span>frontend developer</span> at
            <span> Adhara</span>
        </p>
    </section>
}

export default Home

