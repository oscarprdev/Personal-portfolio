import styles from './Projects.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";
import {
    AngularIcon,
    CssIcon,
    JavascriptIcon,
    ReactIcon,
    SvelteIcon,
    TailwindIcon,
    TypescriptIcon,
} from "../../svg";
import foroImage from '../../../assets/images/foro.png'
import ecommerceImage from '../../../assets/images/ecommerce.png'
import readinglistImage from '../../../assets/images/readinglist.png'
import chatImage from '../../../assets/images/chat.png'

function Projects() {
    const {isDark} = useContext(ThemeContext)

    return <section id={`${routes.projects.path}`}  className={`${styles.projects} ${isDark ? styles.dark : styles.light}`}>
        <article className={`${styles.card} ${styles.box1}`}>
            <h3 className={styles.order}>1</h3>
            <h4 className={styles.title}>Reading List</h4>
            <h5 className={styles.date}>20 July 2023</h5>
            <div className={styles.stack}>
                <div className={styles.iconContainer}>
                    <TypescriptIcon/>
                </div>
                <div className={`${styles.iconContainer} ${styles.iconModifier}`}>
                    <SvelteIcon/>
                </div>
                <div className={`${styles.iconContainer} ${styles.iconModifier}`}>
                    <TailwindIcon/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={readinglistImage} alt="Reading List image" />
            </div>
        </article>
        <article className={`${styles.card} ${styles.box2}`}>
            <h3 className={styles.order}>2</h3>
            <h4 className={styles.title}>Foro</h4>
            <h5 className={styles.date}>23 June 2022</h5>
            <div className={styles.stack}>
                <div className={styles.iconContainer}>
                    <JavascriptIcon/>
                </div>
                <div className={styles.iconContainer}>
                    <ReactIcon/>
                </div>
                <div className={`${styles.iconContainer} ${styles.iconModifier}`}>
                    <CssIcon/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={foroImage} alt="Foro image" />
            </div>
        </article>
        <article className={`${styles.card} ${styles.box3}`}>
            <h3 className={styles.order}>3</h3>
            <h4 className={styles.title}>Chat</h4>
            <h5 className={styles.date}>11 July 2022</h5>
            <div className={styles.stack}>
                <div className={styles.iconContainer}>
                    <JavascriptIcon/>
                </div>
                <div className={styles.iconContainer}>
                    <ReactIcon/>
                </div>
                <div className={`${styles.iconContainer} ${styles.iconModifier}`}>
                    <CssIcon/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={chatImage} alt="Chat image" />
            </div>
        </article>
        <article className={`${styles.card} ${styles.box4}`}>
            <h3 className={styles.order}>4</h3>
            <h4 className={styles.title}>E-commerce</h4>
            <h5 className={styles.date}>28 May 2022</h5>
            <div className={styles.stack}>
                <div className={styles.iconContainer}>
                    <TypescriptIcon/>
                </div>
                <div className={styles.iconContainer}>
                    <AngularIcon/>
                </div>
                <div className={`${styles.iconContainer} ${styles.iconModifier}`}>
                    <CssIcon/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={ecommerceImage} alt="ecommerce image" />
            </div>
        </article>
    </section>
}

export default Projects