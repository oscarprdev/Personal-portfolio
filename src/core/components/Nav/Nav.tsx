import { routes } from "../../routes"
import styles from "./Nav.module.css"
import Switch from '../Switch/Switch.tsx'
import {useContext, useState} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";

function Nav() {
    const {isDark} = useContext(ThemeContext)
    const [location, setLocation] = useState('')

    const listenLocation = (path: string) => {
        setLocation(path)
    }

    return <nav className={styles.nav}>
        {
        Object.values(routes).map(value => {
            return <a href={`#${value.path}`} key={value.path} onClick={() => listenLocation(value.path)}>
                    <h1
                        className={`${location === `${value.path}`
                        && styles.navActive} ${isDark ? styles.dark : styles.light}`}>
                        {value.label}
                    </h1>
                </a>
        })}
        <Switch />
    </nav>
}

export default Nav