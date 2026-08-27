function exemplosObjetos(){
    console.log("objetos.js rodando...")

    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2024,
        cor: "Preto",
        zero: true
    }

    console.log(carro)

    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.ano);
    console.log(carro.cor);
    console.log(carro.zero);

    let nome = "Athos"
    nome.length
    nome.replace("Th","T")
    console.log(nome)
    
}

export default exemplosObjetos;