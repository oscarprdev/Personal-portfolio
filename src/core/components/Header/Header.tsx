import { Link } from 'wouter'
import { routes } from "../../routes";
import styles from './Header.module.css'

function Header() {
    return <header className={styles.header}>
        <h1>OPR</h1>
        <nav className={styles.headerNav}>
            <Link href={routes.blog}>
                <h2 className={styles.navLInkActive}><a>Blog</a></h2>
            </Link>
            <Link href={routes.about}>
                <h2 className={styles.navLInkActive}><a>Experience</a></h2>
            </Link>
            <a aria-disabled={true} className={styles.navLInk}>Portfolio</a>
        </nav>
    </header>
}

export default Header