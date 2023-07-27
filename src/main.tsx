import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeContextProvider} from "./core/context/theme.context.tsx";

createRoot(document.getElementById('root')!).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
)
