import styles from "../../screens/About/About.module.css";
import { AboutData } from "../../screens/About/utils/about-data.ts";

function AboutInfo() {
    return <>
        <p className={styles.infoText}>{ AboutData.description }</p>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <h3>{ AboutData.age.years }</h3>
                <p>{ AboutData.age.title }</p>
            </div>
            <div className={`${styles.info} ${styles.infoExperience}`}>
                <h3>{ AboutData.experience.number }</h3>
                <p className={styles.infoLarge}>{ AboutData.experience.title }</p>
                <div className={styles.stack}>
                    {
                        AboutData.experience.icons.map((icon, id) =>
                            (<div
                                key={id}
                                className={styles.iconContainer}>
                                {icon}
                            </div>)
                        )
                    }
                </div>
            </div>
            <div className={styles.info}>
                <h3>{ AboutData.extra.number }</h3>
                <p>{ AboutData.extra.title }</p>
            </div>
        </div>
    </>
}

export default AboutInfo