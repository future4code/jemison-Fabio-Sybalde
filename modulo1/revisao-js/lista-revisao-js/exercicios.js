// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b)=> a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numPar=[]
    let numerosPares = array.map((num)=>{
        if(num % 2 === 0){
            numPar.push(num)
        }
    })
    return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let potencia = []
    let nmeroPar = array.map((num)=>{
        if(num % 2 === 0){
            potencia.push(num*num)
        }
    })
return potencia
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for(let i = 0; i <= array.length; i++){
        if(array[i] >= maior){
            maior = array[i]
            
        }
    }


    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

 novoArray =[num1, num2]
 let maiorNumero = novoArray[0]

    for(let i = 0; i < novoArray.length; i++){
        if(novoArray[i] > maiorNumero){
            maiorNumero = novoArray[i]          
        }  
    }

    function diferencaEntreNumeros(){
        let resultado
        if(num1<num2){
              resultado = num2-num1
        }else{
            resultado = num1-num2
        }
        return resultado
    }

    function divisivel(){
        if(num2 % num1 === 0){
           maiorDivisivelPorMenor = true
    }else{
         maiorDivisivelPorMenor = false
     }
     return maiorDivisivelPorMenor
    }

    newObjeto={
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: divisivel(),
        diferenca: diferencaEntreNumeros()
    }

  return newObjeto

}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    let numeroPar = []
      for(let i =0; numeroPar.length < n; i++){
        if(i % 2 === 0){
         numeroPar.push(i)
            
        }
    }
    return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA === ladoB && ladoB === ladoC){
       return "Equilátero"
   }else if(ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
       return "Isósceles"
   }else{
       return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
  
    return [array.sort((a, b)=>a-b)[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   novaArray = {
       ...pessoa,
       nome: "ANÔNIMO"
       
   }
   return novaArray
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = []
       
        pessoas.filter((pessoa)=>{
        if(pessoa.nome.includes("C")){
            pessoasAutorizadas.push(pessoa)
        }
        if(pessoa.nome === "D" && pessoa.altura < 1.9){
            pessoasAutorizadas.push(pessoa)
        }
   })
   return pessoasAutorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
     let pessoasNaoAutorizadas = []

    pessoas.find((pessoa1)=>{

        if(pessoa1.idade <= "14" || pessoa1.idade > 60 || pessoa1.altura < 1.5){
            pessoasNaoAutorizadas.push(pessoa1)
        }  
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let novoSaldo = [] // array vazio

    for(let i = 0; i < contas.length; i++){
        novoObjeto ={
            cliente: contas[i]['cliente'],
            saldoTotal: (contas[i]['saldoTotal'] - contas[i]['compras'].reduce((prevVal, elem)=>prevVal+elem,0)),
            compras: []
         }
    novoSaldo.push(novoObjeto)
}
return novoSaldo
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
   consultas.sort((a, b, )=>{
      if(a.nome > b.nome){
          return true
      }else return -1
   })
   return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    novaData = []
   


 for(let i = 0; i < consultas.length; i++){

     novoObj = {
         nome: consultas[i]["nome"],
         dataDaConsulta: consultas[i]['dataDaConsulta'].sort((a, b)=> a - b)
     }
 
    novaData.push(novoObj)
 }
return novaData
}