import {useContext, lazy, Suspense} from "react";
import styles from "./Aside.module.css"
import LazyComponentWrapper from "../LazyComponentWrapper/LazyComponentWrapper.tsx";

import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";

const Home = lazy(() => import("../../screens/Home/Home.tsx"));
const About = lazy(() => import("../../screens/About/About"));
const Projects = lazy(() => import("../../screens/Projects/Projects.tsx"));

function Aside() {
    const {isDark} = useContext(ThemeContext)

    return <aside className={styles.aside}>
        <LazyComponentWrapper
            id={`${routes.home.path}`}
            className={`${styles.home} ${isDark ? styles.dark : styles.light}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </LazyComponentWrapper>
        <LazyComponentWrapper
            id={`${routes.about.path}`}
            className={`${styles.about} ${isDark ? styles.dark : styles.light}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <About />
            </Suspense>
        </LazyComponentWrapper>
        <LazyComponentWrapper
            id={`${routes.projects.path}`}
            className={`${styles.projects}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects />
            </Suspense>
        </LazyComponentWrapper>
    </aside>
}

export default Aside