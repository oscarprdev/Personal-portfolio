import styles from './Footer.module.css'

function Footer() {
    return <footer className={styles.footer}>
        <a href="https://linkedin.com/in/oscarperez8" target="_blank">
            <p>LinkedIn</p>
        </a>
        <a href="https://portfolio-js-eight.vercel.app/" target="_blank">
            <p>Github</p>
        </a>
    </footer>
}

export default Footer