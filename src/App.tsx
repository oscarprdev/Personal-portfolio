import Aside from "./core/components/Aside/Aside";
import Header from "./core/components/Header/Header";
import Nav from "./core/components/Nav/Nav";
import { ThemeContext } from "./core/context/theme.context.tsx";
import { useContext } from "react";
import "./index.css";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main className={`${isDark ? "dark" : "light"}`}>
        <Aside />
        <Nav />
      </main>
    </>
  );
}

export default App;
