import styles from "./About.module.css"

function About() {
    return <section className={styles.about}>
        <h2>Hello</h2>
        <p>
            I'm <span>Oscar Perez Romero</span>, 
            with 1 year of experience as <span>frontend developer</span> currently working at 
            <span> Adhara</span>
        </p>
    </section>
}

export default About