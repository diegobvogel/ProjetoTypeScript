"use strict";
/**
 * Infinitos parametros
 * @param nome
 * @param outrosNomes
 */
function parametroRest(nome) {
    var outrosNomes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        outrosNomes[_i - 1] = arguments[_i];
    }
    return "nome: " + nome + " " + outrosNomes.join(",");
}
var fullName = parametroRest("Diego", "Bruno", "Vogel", "da Silva", "Sauro");
console.log(fullName);
