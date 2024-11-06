import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <Navbar />
        <hr />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="login" element={<LoginPage/>} />

            {/* <Route path="/*" element={<LoginPage/>} />  --Una forma de enviar por default a una pagina especifica en caso de busqueda que no exista */}

            <Route path="/*" element={<Navigate to="about" />} />
        </Routes>
    </>
  )
}
