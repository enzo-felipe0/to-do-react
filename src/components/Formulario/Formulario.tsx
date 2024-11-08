import { useState } from "react";
import { Button } from "../Buttons/Button"
import style from './Formulario.module.scss'

export function Formulario() {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
    }
    return (
        <>
            <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adiciona um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={tempo}
                        onChange={evento => setTempo(evento.target.value)}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button 
                    texto= "Adicionar"
                />
            </form>
        </>
    );

}