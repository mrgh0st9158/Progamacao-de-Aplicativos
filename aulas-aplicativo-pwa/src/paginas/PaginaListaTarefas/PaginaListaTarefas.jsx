import "./PaginaListaTarefas.css";
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaListaTarefas() {
    const [descricaoTarefa, setDescricaoTarefa] = useState("")

    const adicionarTarefa = () => {

    };

    return (
        <Principal titulo="Lista de Tarefa" voltarPara="/">
            <input type="text" placeholder="Digite uma Tarefa"
                value={descricaoTarefa}
                onChange={(evento) => {
                    setDescricaoTarefa(evento.target.value)
                }}
            />
            <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
                Adicionar Tarefa
            </BotaoCustomizado>

        </Principal>
    )
};

export default PaginaListaTarefas;