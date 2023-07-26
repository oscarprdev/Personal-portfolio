import { Link, useLocation } from 'wouter'
import { routes } from "../../routes";
import styles from './Header.module.css'

function Header() {
    const [location] = useLocation();

    return <header className={styles.header}>
        <Link href={routes.default}>
            <h1>OPR</h1>
        </Link>
        <nav className={styles.headerNav}>
            <Link href={routes.experience}>
                <h2 className={`${styles.navLInkActive} ${location === routes.experience && styles.navLinkSelected}`}><a>Experience</a></h2>
            </Link>
            <Link href={routes.blog}>
                <h2 className={`${styles.navLInkActive} ${location === routes.blog && styles.navLinkSelected}`}><a>Blog</a></h2>
            </Link>
            <a aria-disabled={true} className={styles.navLInk}>Portfolio</a>
        </nav>
    </header>
}

export default Header