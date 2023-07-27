import { Route } from "wouter"
import styles from "./Aside.module.css"
import About from "../../screens/About/About"
import { routes } from "../../routes"
import Home from "../../screens/Home/Home.tsx";

function Aside() {    
    return <aside className={styles.aside}>
        <Route path={routes.home.path}>
            <Home/>
        </Route>
        <Route path={routes.about.path}>
            <About/>
        </Route>
    </aside>
}

export default Aside