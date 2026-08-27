function exemplosVariaveis() {
    console.log("variaveis.js rodando...");


    const nome = 'João Silva';  // String
    const idade = 18; // Number
    const possuiFaculdade = true; // Boolean
    const time = "Brasil"; // String
    const comida = null; // Null
    const novoObjeto = {} // Object
    const hoje = new Date(); // Date

    console.log("Typeof nome:", typeof nome);
    console.log("Typeof idade:", typeof idade);
    console.log("Typeof possuiFaculdade:", typeof possuiFaculdade);
    console.log("Typeof time:", typeof time);
    console.log("Typeof comida:", typeof comida);
    console.log("Typeof novoObjeto:", typeof novoObjeto);
    console.log("Typeof hoje:", typeof hoje);

    const gols = 1000;
    const frase = 'Pelé fez ' + gols + ' gols';

    'JavaScript é "super" fácil';
    "JavaScript é 'super' fácil";

    "JavaScript é \"super\" fácil";

    "JavaScript é super fácil"; // Inválido

    `JavaScript é "super" fácil"`;

    const fraseDois = `Pelé fez ${gols} gols`;

    // const numeroUm = prompt("Informe um número:");
    // const numeroDois = prompt("Informe outro número:");

    // if (isNaN(numeroUm) || isNaN(numeroDois)) {
    //     alert("Por favor, informe apenas números.");
    //     return;
    // }

    // const resultado = +numeroUm + +numeroDois;
    // alert(resultado.toString());

    const expoente = 3 ** 2; // 9 "Ao Quadrado"
    const modulo = 15 % 2; // 1"Resto da divisão"

    const soma = '100' + 50; // 10050
    const subtracao = '100' - 50; // 50
    const multiplicacao = '100' * '2'; // 200
    const divisao = 'Blabla 100' / 2; // NaN (Not a Number)

    // É possível verificar se uma variável é NaN ou não com a função isNaN()
    const numero = 70;
    const unidade = 'kg';
    const peso = numero + unidade; // '80kg'
    const pesoPorDois = peso / 2; // NaN (Not a Number)


    let incremento = 5;
    console.log(incremento++); // 5
    console.log(incremento); // 6

    let incremento2 = 5;
    console.log(++incremento2); // 6
    console.log(incremento2); // 6

    const frase3 = 'Isso é um teste';
    +frase3; // NaN
    -frase3; // NaN

    const idade2 = '28';
    +idade2; // 28 (número)
    -idade2; // -28 (número)
    console.log(+idade2 + 5); // 33 

    const possuiFaculdade2 = true;
    console.log(+possuiFaculdade2); // 1
}

export default exemplosVariaveis;