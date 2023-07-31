import styles from "./Home.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";

function Home() {

    return <>
        <h2 className={styles.title}>Hello</h2>
        <p className={styles.textContainer}>
            I'm <span>Oscar</span>,
            currently working as <span>frontend developer</span> at
            <span> Adhara</span>
        </p>
        <span className={styles.scrollDot}></span>
    </>
}

export default Home

