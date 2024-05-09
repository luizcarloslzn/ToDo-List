import { useState } from "react";
import { Botao, CampoTexto, Loading } from "../../components"
import style from './FormCriarTarefa.module.css';
import { useAppContext } from "../../hooks";

const FormCriarTarefa = () => {
    const { adicionarTatefa, loadingCriar } = useAppContext();
    const [nomeTarefa, setNomeTarefa] = useState();
    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    }

    const submeterForm = () => {
        event.preventDefault();

        if (!nomeTarefa) {
            return;
        }
        adicionarTatefa(nomeTarefa)

        setNomeTarefa('')
    }

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterForm}>
            <CampoTexto
                value={nomeTarefa}
                onChange={onChangeNomeTarefa}
            />

            <Botao texto={loadingCriar ? <Loading /> : "+"} />
        </form>
    )
}

export { FormCriarTarefa }