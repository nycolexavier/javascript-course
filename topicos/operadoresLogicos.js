// operador lógico e (&&)
//  retorna TRUE se os dois operandos forem true

// console.log(true && true);

let maiorDeIdade = false;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade && possuiCarteira;

console.log(podeAplicar)

// Operador lógico ou (||)
// retorna true se um dos operandos forem true

let menorDeIdade = false;
let possuiIdade = true;
let podeTrabalhar = menorDeIdade || possuiIdade;

console.log(podeTrabalhar);

// Operador NOT (!)
let candidatoRecusado = !podeTrabalhar;
console.log(candidatoRecusado)