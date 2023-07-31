import styles from "./About.module.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";
import personal from '../../../assets/personal.jpeg'
import { routes } from "../../routes";
import { AboutData } from "./utils/about-data.ts";
import AboutInfo from "../../components/AboutInfo/AboutInfo.tsx";

function About() {
    const {isDark} = useContext(ThemeContext)

    return <section id={`${routes.about.path}`} className={`${styles.about} ${isDark ? styles.dark : styles.light}`}>
        <h2>About me</h2>
        <div className={styles.head}>
            <div className={`${styles.imgContainer} ${isDark ? styles.dark : styles.light}`}>
                <img src={personal} alt="personal image of Oscar Perez"/>
            </div>
            <div className={`${styles.dots} ${isDark ? styles.dotsDark : styles.dotsLight}`}>
                {
                    Array(16).fill('').map((num, id) => (<span key={id}></span>))
                }
            </div>
        </div>
        <AboutInfo/>
    </section>
}

export default About