import styles from "./About.module.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context.tsx";
import personal from '../../../assets/personal.jpeg'
import AboutInfo from "../../components/AboutInfo/AboutInfo.tsx";

function About() {
    const {isDark} = useContext(ThemeContext)

    return <>
        <h2 className={styles.title}>About me</h2>
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
    </>
}

export default About