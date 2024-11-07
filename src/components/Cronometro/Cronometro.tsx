import style from './Cronometro.module.scss'
import { Button } from "../Buttons/Button";
import { Relogio } from "./Relogio/Relogio";

export function Cronometro() {
    return (
        <>
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button
                texto = "Começar"
            />
        </div>
        </>
    )
}