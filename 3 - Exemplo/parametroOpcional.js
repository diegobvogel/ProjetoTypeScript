"use strict";
function nomeCompleto(nome, sobrenome) {
    console.log("nome " + nome + ", sobrenome " + sobrenome);
}
console.log("-- Exemplo de parâmetro opcional -------------------------------------------------");
nomeCompleto("Diego", "Bruno Vogel");
nomeCompleto("Diego");
function somarValores(val1, val2, val3) {
    var total = val1 + val2;
    if (val3 != undefined) {
        total += val3;
    }
    console.log("soma \u00E9: " + total);
}
console.log("\n-- Exemplo de parâmetro opcional 2 ---------------------------------------------");
somarValores(10, 20, 30);
somarValores(10, 20);
function parametroDefault(preco, taxa) {
    if (taxa === void 0) { taxa = 0.50; }
    var desconto = preco * taxa;
    console.log("desconto \u00E9: " + desconto);
}
console.log("\n-- Exemplo de parâmetro default --------------------------------------------------");
parametroDefault(1000);
parametroDefault(1000, 0.10);
function parametroDefault2(preco, taxa, aplicar) {
    if (taxa === void 0) { taxa = 0.50; }
    if (aplicar === void 0) { aplicar = true; }
    var desconto;
    if (aplicar) {
        desconto = preco * taxa;
        console.log("valor \u00E9: " + desconto + " (desconto de " + taxa * 100 + "%)");
    }
    else {
        desconto = preco;
        console.log("valor \u00E9: " + desconto + " (sem desconto)");
    }
}
console.log("\n-- Exemplo de parâmetro default 2 ------------------------------------------------");
parametroDefault2(1000);
parametroDefault2(1000, 0.10);
parametroDefault2(1000, 0.10, false);
