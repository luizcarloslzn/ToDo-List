import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Footer } from "../../components"
import { useAppContext } from "../../hooks";

const LayoutsPadrao = () => {
    const { criador } = useAppContext();
    return (
        <>
            <Cabecalho nomeUsuario="Luiz" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Footer nomeCriador={criador} />
        </>
    )
}

export { LayoutsPadrao } 