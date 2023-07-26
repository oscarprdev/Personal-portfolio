import { Route } from "wouter"
import styles from "./Aside.module.css"
import About from "../../screens/About/About"
import { routes } from "../../routes"

function Aside() {    
    return <aside className={styles.aside}>
        <Route path={routes.about.path}>
            <About/>
        </Route>
    </aside>
}

export default Aside