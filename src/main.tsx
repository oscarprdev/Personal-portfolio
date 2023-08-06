import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeContextProvider} from "./core/context/theme.context.tsx";
import {LocationContextProvider} from "./core/context/location.context.tsx";

createRoot(document.getElementById('root')!).render(
    <ThemeContextProvider>
        <LocationContextProvider>
            <App />
        </LocationContextProvider>
    </ThemeContextProvider>
)
