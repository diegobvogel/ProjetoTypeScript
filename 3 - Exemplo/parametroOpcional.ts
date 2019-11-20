function nomeCompleto(nome: string, sobrenome?: string){
    console.log(`nome ${nome}, sobrenome ${sobrenome}`);
}

console.log("-- Exemplo de parâmetro opcional -------------------------------------------------");
nomeCompleto("Diego", "Bruno Vogel");
nomeCompleto("Diego");

function somarValores(val1: number,val2: number,val3?: number) {
    let total = val1 + val2;

    if (val3 != undefined) {
        total += val3;
    }
    console.log(`soma é: ${total}`);
}

console.log("\n-- Exemplo de parâmetro opcional 2 ---------------------------------------------");
somarValores(10,20,30);
somarValores(10,20);


function parametroDefault(preco: number, taxa = 0.50) {
    let desconto = preco * taxa;
    console.log(`desconto é: ${desconto}`);
}

console.log("\n-- Exemplo de parâmetro default --------------------------------------------------");
parametroDefault(1000);
parametroDefault(1000, 0.10);


function parametroDefault2(preco: number, taxa = 0.50, aplicar = true) {
    let desconto;

    if (aplicar) {
        desconto = preco * taxa;
        console.log(`valor é: ${desconto} (desconto de ${taxa*100}%)`);
    }else{
        desconto = preco;
        console.log(`valor é: ${desconto} (sem desconto)`);
    }
}

console.log("\n-- Exemplo de parâmetro default 2 ------------------------------------------------");
parametroDefault2(1000);
parametroDefault2(1000, 0.10);
parametroDefault2(1000, 0.10, false);