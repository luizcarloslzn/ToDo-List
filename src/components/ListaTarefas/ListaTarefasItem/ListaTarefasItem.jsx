import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../components';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
    const { id, nome } = props;
    const [estaEditando, setEstaEditando] = useState(false);

    const { editarTarefa, removerTarefa, loadingEditar, loadingRemover } = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaRemovendo = loadingRemover == id;

    return (
        <li className={style.ListaTarefasItem}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa}
                    autoFocus
                />
            )}
            {!loadingEstaEditando && !estaEditando && (
                <samp
                    onDoubleClick={() => setEstaEditando(true)}>
                    {nome}
                </samp>
            )}

            {loadingEstaEditando && (
                <Loading />
            )}

            <Botao texto={loadingEstaRemovendo ? <Loading /> : '-'}
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)} />
        </li>
    )
}

export { ListaTarefasItem }