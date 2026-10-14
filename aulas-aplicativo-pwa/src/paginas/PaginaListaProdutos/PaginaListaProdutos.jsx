import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaProdutos.css"

const produtos = [
    {
        nome: 'Smartphone Samsung',
        preco: 2999,
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        nome: 'Notebook Acer',
        preco: 4999,
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        nome: 'Tablet Asus',
        preco: 1499,
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

function formatar_valor(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

function PaginaListaProdutos() {
    return (
        <Principal titulo="Lista de Produtos" voltarPara="/">
            {produtos.map((itemProduto, index) => {
                return (
                    <div key={index} className="div_produtos">
                        <h3>Produto:</h3> {itemProduto.nome}
                        <br />
                        <h3>Preco:</h3> {formatar_valor(itemProduto.preco)}
                        <br />
                        <h3>Cores:</h3>
                        <div className="PaginaListaProdutos_cores">
                            {itemProduto.cores.map((itemCor) => {
                                return <div style={{
                                    backgroundColor: itemCor,
                                    height: 16,
                                    flex: 1,
                                }}
                                />

                            })}
                        </div>
                        <br />

                    </div>
                )
            })};

        </Principal>
    )
};

export default PaginaListaProdutos;