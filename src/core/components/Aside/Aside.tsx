import styles from "./Aside.module.css"
import About from "../../screens/About/About"
import Home from "../../screens/Home/Home.tsx";
import Projects from "../../screens/Projects/Projects.tsx";

function Aside() {    
    return <aside className={styles.aside}>
            <Home/>
            <About/>
            <Projects/>
    </aside>
}

export default Aside