import style from './Footer.module.css'

const Footer = (props) => {
    const { nomeCriador } = props;
    const anoAtual = (new Date()).getFullYear();

    return (
        <div className={style.Footer}>
            React Básico - {anoAtual} - {nomeCriador}
        </div>
    )
}

export { Footer };