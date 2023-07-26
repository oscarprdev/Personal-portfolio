import styles from './Experience.module.css'

function Experience() {
    return <section className={styles.experience}>
        <article className={styles.work}>
            <div className={styles.period}>
                <p>Currently</p>
                <p>October, 2022</p>
                <span className={styles.balloon}>1</span>
            </div>
            <div className={styles.job}>
                <h3>Adhara</h3>
                <p>Frontend developer.<br/>Typescript, React, Vue, Vitest, Playwright, Docker..</p>
            </div>
        </article>
        <article className={styles.work}>
            <div className={styles.period}>
                <p>October, 2022</p>
                <p>August, 2022</p>
                <span className={styles.balloon}>2</span>
            </div>
            <div className={styles.job}>
                <h3>Minsait</h3>
                <p>Junior Frontend developer <br/>Javascript, Lit..</p>
            </div>
        </article>
        <article className={styles.work}>
            <div className={styles.period}>
                <p>August, 2022</p>
                <p>February, 2022</p>
                <span className={styles.balloon}>3</span>
            </div>
            <div className={styles.job}>
                <h3>Bootcamp UpgradeHUb</h3>
                <p>Student Fullstack developer<br/>Javascript, React, NodeJs, Express, MongoDB..</p>
            </div>
        </article>
        <article className={styles.work}>
            <div className={styles.period}>
                <p>August, 2022</p>
                <p>July, 2026</p>
                <span className={styles.balloon}>4</span>
            </div>
            <div className={styles.job}>
                <h3>Btechc</h3>
                <p>Automotive industrial designer <br/>Product development, Management..</p>
            </div>
        </article>
    </section>
}

export default Experience