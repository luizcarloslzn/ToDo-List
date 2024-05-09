import { Route, Routes } from "react-router-dom"
import { Erro404, Inicial, SobreNos } from "./pages"
import { LayoutsPadrao } from "./layouts"


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutsPadrao />}>
                <Route path='/' element={<Inicial />} />
                <Route path='/sobre-nos' element={<SobreNos />} />
                <Route path='*' element={<Erro404 />} />
            </Route>
        </Routes>
    )
}

export { Router }