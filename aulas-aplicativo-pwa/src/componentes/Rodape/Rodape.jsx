import "./Rodape.css"

function Rodape() {
  const ano_atual = new Date().getFullYear();

  return (
    <footer className="Rodape_root">
      <span>Copyright © {ano_atual} - Todos os direitos reservados - Athos.</span>
    </footer>
  );
}

export default Rodape;
