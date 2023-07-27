import styles from "./About.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import personal from '../../../assets/personal.jpeg'

function About() {
    const {isDark} = useContext(ThemeContext)

    return <section className={`${styles.about} ${isDark ? styles.dark : styles.light}`}>
        <h2>About me</h2>
        <div className={styles.head}>
            <div className={`${styles.imgContainer} ${isDark ? styles.dark : styles.light}`}>
                <img src={personal} alt="personal image of Oscar Perez"/>
            </div>
            <div className={`${styles.dots} ${isDark ? styles.dotsDark : styles.dotsLight}`}>
                {
                    Array(16).fill('').map(() => (<span></span>))
                }
            </div>
        </div>
        <p className={styles.infoText}>My background comes from 6 years working as Automotive Industrial Engineer, 6 months fullstack bootcamp & 1000+ hours of self-studying since 2021</p>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <h3>30</h3>
                <p>Years old</p>
            </div>
            <div className={styles.info}>
                <h3>1+</h3>
                <p>Years of real development experience</p>
            </div>
            <div className={styles.info}>
                <h3>1</h3>
                <p>Bulldog</p>
            </div>
        </div>
    </section>
}

export default About