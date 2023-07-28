import styles from './Projects.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";
import JSIcon from '../../../assets/icons/javascript-svgrepo-com.svg'
import TSIcon from '../../../assets/icons/typescript-svgrepo-com.svg'
import AngularIcon from '../../../assets/icons/angular-outlined-svgrepo-com.svg'
import ReactIcon from '../../../assets/icons/react-svgrepo-com.svg'
import CssIcon from '../../../assets/icons/css-16-svgrepo-com.svg'
import SassIcon from '../../../assets/icons/sass-svgrepo-com.svg'
import SvelteIcon from '../../../assets/icons/svelte-svgrepo-com.svg'
import TailwindIcon from '../../../assets/icons/tailwind-svgrepo-com.svg'
import VueIcon from '../../../assets/icons/vue-js-svgrepo-com.svg'
import JestIcon from '../../../assets/icons/jest-svgrepo-com.svg'

function Projects() {
    const {isDark} = useContext(ThemeContext)

    return <section id={`${routes.projects.path}`}  className={`${styles.projects} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.box1}>
            <h3 className={styles.order}>1</h3>
            <h4 className={styles.title}>Reading List</h4>
            <h5 className={styles.date}>20 July 2023</h5>
            <div className={styles.stack}>
                <div className={styles.iconContainer}>
                    <img src={JSIcon} alt="javascript icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={TSIcon} alt="typescript icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={AngularIcon} alt="angular icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={ReactIcon} alt="react icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={CssIcon} alt="css icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={SassIcon} alt="sass icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={SvelteIcon} alt="svelte icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={TailwindIcon} alt="tailwind icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={VueIcon} alt="vue icon"/>
                </div>
                <div className={styles.iconContainer}>
                    <img src={JestIcon} alt="jest icon"/>
                </div>
            </div>
        </div>
        <div className={styles.box2}>
            <h3 className={styles.order}>2</h3>
            <h4 className={styles.title}>Foro</h4>
            <h5 className={styles.date}>23 June 2022</h5>
        </div>
        <div className={styles.box3}>
            <h3 className={styles.order}>3</h3>
            <h4 className={styles.title}>Chat</h4>
            <h5 className={styles.date}>11 July 2022</h5>
        </div>
        <div className={styles.box4}>
            <h3 className={styles.order}>4</h3>
            <h4 className={styles.title}>E-commerce</h4>
            <h5 className={styles.date}>28 May 2022</h5>
        </div>
    </section>
}

export default Projects