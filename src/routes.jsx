import { createBrowserRouter } from "react-router-dom";


import {Home} from './Pages/Home'
import {Contactos} from './Pages/contactos'
import {Portifolio} from './Pages/Portofolio'
import {SobreNos} from './Pages/Sobre-nos'
import {Servicos} from './Pages/servicos'
import {ErrorPage} from './Pages/error-Page'


export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/portifolio",
        element: <Portifolio/>,
    },
    {
        path: "/contactos",
        element: <Contactos/>,
    },
    {
        path: "/servicos",
        element: <Servicos/>,
    },
    {
        path: "/sobre-nos",
        element: <SobreNos/>,
    }
])