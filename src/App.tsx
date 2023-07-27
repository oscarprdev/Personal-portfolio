import Aside from './core/components/Aside/Aside';
import Header from './core/components/Header/Header';
import Nav from "./core/components/Nav/Nav";
import {ThemeContext} from "./core/context/theme.context.tsx";
import {useContext} from "react";
import './index.css'

function App() {
    const {isDark} = useContext(ThemeContext)
  return (
      <div className={`${isDark ? 'dark' : 'light'}`}>
          <Header/>
          <main >
              <Aside/>
              <Nav/>
          </main>
      </div>
  )
}

export default App
