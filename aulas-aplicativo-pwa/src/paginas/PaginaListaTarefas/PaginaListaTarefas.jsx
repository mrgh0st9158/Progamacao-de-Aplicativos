import "./PaginaListaTarefas.css";
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { GiBatWing } from "react-icons/gi";

function PaginaListaTarefas() {
    const [descricaoTarefa, setDescricaoTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        if(descricaoTarefa.trim()){
            const novaTarefa = {id: Date.now(), descricao: descricaoTarefa};
            setTarefas([...tarefas, novaTarefa]);
            setDescricaoTarefa("")
        }else{
            alert("Tarefa Obrigatória")
        }
    };

    const removerTarefa = (id) => {
        if(confirm("Deseja realmente remover a tarefa?")){
            const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
            setTarefas(tarefasAtualizadas);          
        }
    };

    return (
        <Principal titulo="Lista de Tarefa" voltarPara="/">

            <CampoCustomizado
                label="Tarefa"
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={descricaoTarefa}
                onChange={(event) => {setDescricaoTarefa(event.target.value)}}
            />  

            <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
                Adicionar Tarefa
            </BotaoCustomizado>

            {tarefas.map((item) => {
                return(
                    <div key={item.id} className="PaginaListaTarefas_item">{item.descricao}  <GiBatWing color="red" onClick={() => removerTarefa(item.id)} cursor="pointer"/></div>
                    
                )
            })}


        </Principal>
    )
};

export default PaginaListaTarefas;