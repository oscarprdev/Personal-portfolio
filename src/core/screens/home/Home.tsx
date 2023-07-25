import styles from './Home.module.css'
function Home() {
    return <section className={styles.home}>
        <p className={styles.text}>
            My name is <span className={styles.name}>Oscar Perez Romero</span>  &
            I'm currently working as <span className={styles.work}>Frontend Developer</span> at <a href="https://www.adhara.io/" target="_blank" className={styles.company}>Adhara</a> since 2022.
            <br></br>
            <br></br>
            <b>My background comes from working 6 years as Automotive Industrial Engineer </b>
            but my passion & curiosity for creating things from scratch has led me to become a web developer after completing a full stack bootcamp last year.
        </p>
        <span className={styles.infinity}></span>
    </section>
}

export default Home