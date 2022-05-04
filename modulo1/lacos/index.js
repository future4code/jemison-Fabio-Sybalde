/*  RESPOSTA DO EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGOS LAÇOS

1. Questão

   R. Acredito que seja 10. Pois ele está sempre somando o valor da variável (i) ao valor da variável (valor) e irá repetir esse processo enquanto o valor de (i) for menor que 5.

2. Questão

   a) será impresso: 19, 21, 23, 25, 27, 30.

   b) sim. Usando o for...of nos elementos e dando um console.log nos elementos.



3. Questão

    Será impresso:
        *
        **
        ***
        ****
      Pois enquanto a variável (asteriscos) for menor que a variável (quantidadeAtual), será adicionado mais 1 asterisco à variável (asterisco). Quando isso acontecer, a variável linha será somada a ela mesma mais o asterisco adicionado. 

*/

// RESPOSTA DO EXERCÍCIO DE ESCRITA DE CÓDIGOS LAÇOS

// 1. Questão


 let quantidadeBichinhos = Number(prompt(`Quantos bichinhos você tem em casa?`))


 if (quantidadeBichinhos === 0){
   console.log(`Que pena! Você pode adotar um pet`)
 } else {
    let nome = 0
    let nomes = []
    while(nome < quantidadeBichinhos){
      let todosOsNomes = prompt(`Quais os nomes deles?`)
     nomes.push(todosOsNomes)
      nome++
    }
    for(let pos = 0; pos < nomes.length; pos++){
      console.log(`O animal na posição ${pos} é: ${nomes[pos]}`)
    }

    
    }

// 2. Questão

  // a)
       let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

      
       function imprimeNumeros(array){
            for(let elemento of array){
              console.log(elemento)
            }
       }
       imprimeNumeros(arrayOriginal)
       

  // b)
      function divideElementos(array){
        for(let elemento of array){
          console.log(elemento / 10)
        }
      }
      divideElementos(arrayOriginal)


  // c)
        let par = []
        function numeroPar(array){
          for(let elemento of array){
            if(elemento % 2 ===0){
              par.push(elemento)
            }
          }
          console.log(par)
        }
        numeroPar(arrayOriginal)


  // d)
        let mensagemFinal = []
        function imprimirMensagem(array){
       for(let i = 0; i <=11; i++){
        let mensagem = `o elemento do index ${i} é ${array[i]}`
         mensagemFinal.push(mensagem)
        
      }
      console.log(mensagemFinal)
    }
     imprimirMensagem(arrayOriginal)


  // e) 
       
         let maior = 0
         let menor = 100
         for(let elemento of arrayOriginal){
           if(elemento > maior){
             maior = elemento
             
           } 
          }
           
          for(let elemento of arrayOriginal){
            if(elemento < menor){
              menor = elemento
              
            }
          }
          console.log(`O Maior número é: ${maior} e o menor número é: ${menor}.`)
         
       
      
   