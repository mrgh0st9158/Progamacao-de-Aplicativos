function exemplosCondicionais() {
    console.log("condicionais.js rodando...");

    const possuiGraduacao = true;
    const possuiDoutorado = false;

    if (possuiGraduacao) {
        console.log('Possui graduação');
    } else {
        console.log('Não possui graduação');
    }

    const diaSemana = Number(prompt('Digite um dia da semana: '));

    if (diaSemana === 1) {
        console.log('Segunda-feira');
    } else if (diaSemana === 2) {
        console.log('Terça-feira');
    } else if (diaSemana === 3) {
        console.log('Quarta-feira');
    } else if (diaSemana === 4) {
        console.log('Quinta-feira');
    } else if (diaSemana === 5) {
        console.log('Sexta-feira');
    } else if (diaSemana === 6) {
        console.log('Sábado');
    } else if (diaSemana === 7) {
        console.log('Domingo');
    } else {
        console.log('Dia inválido');
    }


    switch (diaSemana) {
        case 1:
            console.log('Segunda-feira');
            break;
        case 2:
            console.log('Terça-feira');
            break;
        case 3:
            console.log('Quarta-feira');
            break;
        case 4:
            console.log('Quinta-feira');
            break;
        case 5:
            console.log('Sexta-feira');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('Dia inválido');
            break;
    }



}

export default exemplosCondicionais;