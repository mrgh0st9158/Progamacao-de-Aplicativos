import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { useNavigate } from 'react-router-dom';

function PaginaInicial() {
  const navigate = useNavigate();
  return (
    <Principal>
      Conteúdo principal
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => navigate('/lista-produtos')}
        >
        Lista Produtos
      </BotaoCustomizado>
    </Principal>
  );
}
export default PaginaInicial;
