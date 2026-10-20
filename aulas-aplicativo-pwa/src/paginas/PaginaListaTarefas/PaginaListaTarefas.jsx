import "./PaginaListaTarefas.css";
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaTarefas() {
    const [descricaoTarefa, setDescricaoTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        tarefas.push(descricaoTarefa);
        setTarefas([...tarefas]);
    };

    return (
        <Principal titulo="Lista de Tarefa" voltarPara="/">

            <CampoCustomizado
                label="Tarefa"
                type="text"
                value={descricaoTarefa}
                onChange={(event) => {setDescricaoTarefa(event.target.value)}}
            />  

            <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
                Adicionar Tarefa
            </BotaoCustomizado>

            {tarefas.map((item) => {
                return(
                    <li>{item}</li>
                )
            })}

        </Principal>
    )
};

export default PaginaListaTarefas;