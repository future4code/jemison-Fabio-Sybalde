// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

let altura = Number (prompt("Digite a altura:"))
let largura = Number (prompt("Agora digite  largura"))
let resultado = (altura*largura)
 
console.log(resultado)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

let anoAtual = Number (prompt("Digite o ano atual:"))
let anoNascimento = Number (prompt("Agora digite seu ano de nascimento:"))
let resultado = (anoAtual-anoNascimento)

console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let imc = (peso/(altura*altura))

  return imc;


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt("Diga seu nome:")
  let idade = Number (prompt("Agora diga a sua idade:"))
  let email = prompt("Por último insira seu email:")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é "+ email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let cor1 = prompt("Diga sua primeira cor favorita:")
  let cor2 = prompt("Agora diga sua segunda cor favorita")
  let cor3 = prompt("por último diga sua terceira cor favorita:")

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

 let maiuscula = prompt("digite uma palavra:")

  return (maiuscula.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

let conta = (custo / valorIngresso)

 return conta;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1 > string2
 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return (array[array.length - 1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

    let valor1 = array[0]
    let valor2 = array[array.length-1]
    let valor3 = valor1
    valor1 = valor2
    valor2 = valor3
    array[0] = valor1
    array[array.length-1] = valor2

   return array
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
 let novaCase = (string1.toUpperCase())
 let novacse1 = (string2.toUpperCase())

return novaCase === novacse1


}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual:'))
  const anoDeNascimento = Number(prompt('Digite seu ano de nascimento:'))
  let anoDeEmissaoRg = Number(prompt('Digite o ano de emissao do seu RG:'))

  let idade = anoAtual - anoDeNascimento
  let idadeDoRg = anoAtual - anoDeEmissaoRg

  let checar = idade <= 20 && idadeDoRg >= 5 || idade <= 50 && idadeDoRg >= 10 || idade > 50 && idadeDoRg >= 15

  console.log(checar)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let bissexto = (ano === 2000)
  let naoBissexto = (ano > 2001)
  let resposta = (bissexto || naoBissexto)

  return resposta

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("tem mais de 18 anos?")
  let ensinoM = prompt("tem ensino édio completo?")
  let disponibilidade = prompt("tem disponibilidade de horários?")

  let sim = (idade === "sim")
  let sim1 = (ensinoM === "sim")
  let sim2 = (disponibilidade === "sim")

  let aprovado = (sim && sim1 && sim2)
 
  console.log(aprovado)

}




