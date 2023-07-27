import styles from "./About.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import personal from '../../../assets/personal.jpeg'

function About() {
    const {isDark} = useContext(ThemeContext)

    return <section className={`${styles.about} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.imgContainer}>
            <img src={personal} alt="personal image of Oscar Perez"/>
        </div>
    </section>
}

export default About