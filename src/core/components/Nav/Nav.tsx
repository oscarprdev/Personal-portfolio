import { routes } from "../../routes"
import styles from "./Nav.module.css"
import { Link, useLocation } from "wouter"
import Switch from '../Switch/Switch.tsx'
import {useContext} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";

function Nav() {
    const [location] = useLocation()
    const {isDark} = useContext(ThemeContext)

    return <nav className={styles.nav}>
        {
        Object.values(routes).map(value => {
            return <Link href={value.path}>
                <h1 
                className={`${location === value.path 
                && styles.navActive} ${isDark ? styles.dark : styles.light}`}>
                    {value.label}
                </h1>
            </Link>
        })}
        <Switch />
    </nav>
}

export default Nav