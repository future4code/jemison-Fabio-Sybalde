// RESPOSTAS EXERCÍCIO DE INTERPRETAÇÃO.

/* 1. 
      ("a. ", false);

      ("b. ", false);

      ("c. ", true);

      ("d. ", booleans);


   2. 
      O problema é que ele precisa converter os valores do prompt de string para numeros com o comando NUMBER. Caso contrário será impresso no console a junção dos numeros digitados e não a soma deles.

   3. 
         let primeiroNumero = Number (prompt("Digite um numero!"))

         let segundoNumero = Number (prompt("Digite outro numero!"))

         const soma = primeiroNumero + segundoNumero

         console.log(soma)

         Assim ovalor impresso será a soma dos números.
*/

// RESPOSTA EXERCÍCIO DE ESCRITA DE CÓGIGOS
// QUESTÃO 1.

let idade = Number (prompt("Digite sua idade:"))
let idadeMelhorAmigo = Number (prompt ("Digite a idade do seu melhor migo:"))

let resultado = (idade > idadeMelhorAmigo)
let diferencaIdades = (idade - idadeMelhorAmigo)

console.log("Sua idade é maior que a do seu amigo?", resultado,".")

console.log("A diferença de idade entre meu amigo e eu é de:", diferencaIdades, "anos de idade.") 



// QUESTÃO 2.

let numeroPar = Number (prompt("Insira um número PAR:"))
let resultdo = (numeroPar % 2)

console.log(resultdo)

/*  LETRA C) O padrão que eu percebi é que o resto da divisão sempre será 0 independente do resultado dela.

   LETRA D) Nesse caso, eu percebi que caso o usuário insira um número ímpar, o resto da divisão será 1 independente do resultado.

*/



// QUESTÃO 3.

let idadeEmAnos = Number (prompt("Qual a sua idade?"))
let idadeEmMeses = (idadeEmAnos*12)
let idadeEmDias = (idadeEmMeses*30)
let idadeEmHoras = (idadeEmDias*24)

console.log("Sua idade é:", idadeEmAnos, "anos.")
console.log("Sua idade em meses é:", idadeEmMeses, "meses.")
console.log("Sua idade em dias é:", idadeEmDias, "dias.")
console.log("Sua idade em horas é:", idadeEmHoras, "horas.")



// QUESTÃO 4. 

let numero01 = Number (prompt("Digite um número:"))
let numero02 = Number (prompt("Digite outro número:"))
let resposta1 = numero01 > numero02
let resposta2 = numero01 === numero02
let resposta3 = numero01 >= numero02
let resposta4 = numero01 < numero02



console.log(numero01, numero02);

console.log("O primeiro número é maior que o segundo?", resposta1, ".");

console.log("O primeiro número é igual ao segundo?", resposta2, ".");

console.log("O primeiro número é divisível pelo segundo?", resposta3, ".");

console.log("O segundo número é divisível pelo primeiro?", resposta4, ".");













