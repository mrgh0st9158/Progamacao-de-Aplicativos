import "./Avatar.css"


function Avatar(props) {
    const nomes = props.nome.split(" ")

    const primeiro_nome = nomes[0]
    const primeira_letra_nome = primeiro_nome[0]

    let primeira_letra_ultimo_nome = ""
    if (nomes.length > 1) {
        const ultimo_nome = nomes.at(-1)
        primeira_letra_ultimo_nome = ultimo_nome[0]
    }

    return (
        <div className="Avatar_root">{primeira_letra_nome + primeira_letra_ultimo_nome}</div>
    )
}

export default Avatar