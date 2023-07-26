import Header from './core/components/Header/Header'
import Home from './core/screens/home/Home.tsx'
import Footer from './core/components/Footer/Footer.tsx'
import { Route } from'wouter'
import { routes } from "./core/routes";
import Experience from "./core/screens/experience/Experience.tsx";

function App() {
  return (
    <>
        <Header/>
        <main>
            <Route path={routes.default}>
                <Home/>
            </Route>
            <Route path={routes.experience}>
                <Experience/>
            </Route>
            <Route path={routes.blog}><p>My blog page</p></Route>
        </main>
        <Footer/>
    </>
  )
}

export default App
