import {useContext, lazy, Suspense} from "react";
import styles from "./Aside.module.css"
import projectStyles from '../../screens/Projects/Projects.module.css'
import aboutStyles from '../../screens/About/About.module.css'
import homeStyles from '../../screens/Home/Home.module.css'
import blogStyles from '../../screens/Blog/Blog.module.css'
import LazyComponentWrapper from "../LazyComponentWrapper/LazyComponentWrapper.tsx";
import {ThemeContext} from "../../context/theme.context.tsx";
import {routes} from "../../routes";

const Home = lazy(() => import("../../screens/Home/Home.tsx"));
const About = lazy(() => import("../../screens/About/About"));
const Projects = lazy(() => import("../../screens/Projects/Projects.tsx"));
const Blog = lazy(() => import("../../screens/Blog/Blog.tsx"));

function Aside() {
    const {isDark} = useContext(ThemeContext)

    return <aside className={styles.aside}>
        <LazyComponentWrapper
            id={`${routes.home.path}`}
            className={`${homeStyles.home} ${isDark ? styles.dark : styles.light}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </LazyComponentWrapper>
        <LazyComponentWrapper
            id={`${routes.about.path}`}
            className={`${aboutStyles.about} ${isDark ? styles.dark : styles.light}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <About />
            </Suspense>
        </LazyComponentWrapper>
        <LazyComponentWrapper
            id={`${routes.projects.path}`}
            className={`${projectStyles.projects}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects />
            </Suspense>
        </LazyComponentWrapper>
        <LazyComponentWrapper
            id={`${routes.blog.path}`}
            className={`${blogStyles.blog}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Blog />
            </Suspense>
        </LazyComponentWrapper>
    </aside>
}

export default Aside