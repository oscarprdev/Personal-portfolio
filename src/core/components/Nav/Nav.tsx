import { routes } from "../../routes"
import styles from "./Nav.module.css"
import { Link, useLocation } from "wouter"

function Nav() {
    const [location] = useLocation()

    return <nav className={styles.nav}>
        {
        Object.values(routes).map(value => {
            return <Link href={value.path}>
                <h1 
                className={`${location === value.path 
                && styles.navActive}`}>
                    {value.label}
                </h1>
            </Link>
        })}
    </nav>
}

export default Nav