/**
 * Maneira de criar um método com Infinitos parametros 
 * @param nome 
 * @param outrosNomes 
 */
function parametroRest(nome: string, ...outrosNomes: string[]){
    return "nome: " + nome + " " + outrosNomes.join(",");
}

let fullName = parametroRest("Diego", "Bruno", "Vogel", "da Silva", "Sauro");
console.log(fullName);