import exemplosDatas from "../scripts/bin_datas.js";
import exemplosVariaveis from "../scripts/variaveis.js";
import exemplosCondicionais from "../scripts/outros/condicionais.js";
import exemplosObjetos from "../scripts/objetos.js";

const btnVariaveis = document.getElementById("btnVariaveis");
btnVariaveis.addEventListener("click", exemplosVariaveis);

document.getElementById("btnCondicionais").addEventListener("click", exemplosCondicionais);
document.getElementById("btnData").addEventListener("click", exemplosDatas);
document.getElementById("btnObjetos").addEventListener("click", exemplosObjetos);