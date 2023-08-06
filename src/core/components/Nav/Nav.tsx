import { routes } from "../../routes"
import styles from "./Nav.module.css"
import Switch from '../Switch/Switch.tsx'
import {useContext, useEffect} from "react";
import {ThemeContext} from "../../context/theme.context.tsx";
import {LocationContext} from "../../context/location.context.tsx";

function Nav() {
    const {isDark} = useContext(ThemeContext)
    const {location, updateLocation} = useContext(LocationContext)

    const listenLocation = (path: string) => {
        updateLocation(path)
    }

    useEffect(() => {
        updateLocation(window.location.hash.replace('#', ''))
    }, []);

    const isLocationActive = (path: string) => {
        return location === path || location === "" && path === '/'
    }

    return <nav className={styles.nav}>
        {
        Object.values(routes).map(value => {
            return <a href={`#${value.path}`} key={value.path} onClick={() => listenLocation(value.path)}>
                    <h1
                        className={`${isLocationActive(value.path) ? styles.navActive : ''} ${isDark ? styles.dark : styles.light}`}>
                        {value.label}
                    </h1>
                </a>
        })}
        <Switch />
    </nav>
}

export default Nav