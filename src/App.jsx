import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'
import { createContext, useState } from 'react'
export const appContext = createContext(null);
function App() {

    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <>
            <appContext.Provider value={{darkTheme, setDarkTheme}}>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </appContext.Provider>
        </>
    )
}

export default App
