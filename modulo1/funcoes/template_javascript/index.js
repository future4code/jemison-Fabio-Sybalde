// RESPOSTA EXERCÍCIOS DE INTERPRETAÇÃO

/*
   1. Questão
       a) Vai ser impresso 10, 50
       b) A função seria executada, mas não apareceria nada no console. Pois não foi dado o comando console.log.

   2. Questão

      a) basicamente essa função vai receber um texto do usuário através do "prompt" e retornar um texto com algumas alterações. A sua utilidade vai ser: mudar a fonte/Case do texto todo para minúscula e retornar com true ou false se existe a palavra "cenoura" dentro o texto.

      b) i. eu gosto de cenoura, true;
         ii. cenoura é bom pra vista, false;
         iii. cenouras crescem na terra, false;

*/

// RESPOSTA EXERCÍCIO DE DIGITAÇÃO DE CÓDIGOS

// 1. Questão

   // a) 
         function minhasInformacoes() {
            console.log("Eu sou Fábio, tenho 28 anos, moro em Recife e sou estudante.")
         }
         minhasInformacoes()

   
   // b)
        function informacoesMeuFilho(string1,Number, string2, string3){

        console.log(`Eu sou ${string1}, tenho ${Number} aninho, moro em ${string2} e não tenho ${string3}.`)
        }

        informacoesMeuFilho("Davi", 1, "Recife", "profissão")

// 2. Questão

   // a)
        function recebeDoisNumerosESoma(num1, num2){
           const resultado = (num1 + num2)
           return resultado
           
        }
        recebeDoisNumerosESoma(3, 7)
        const result = recebeDoisNumerosESoma(3, 7)
        console.log(result)

   // b)
        function recebeDoisNumerosERetornaBooleano(numero1, numero2){

            const maiorOuIgual = (numero1 >= numero2)
            return maiorOuIgual
        }
        recebeDoisNumerosERetornaBooleano(3, 6)
        const resultado1 = recebeDoisNumerosERetornaBooleano(3, 6)
        console.log(resultado1)

   // c)
        function recebeUmNumeroEVerificaSeEParOuImpar(num){
            const calculo = (num % 2 )
            const numPar = (calculo == 0)
            return numPar
        }
        recebeUmNumeroEVerificaSeEParOuImpar(33)
        const numeroPar = recebeUmNumeroEVerificaSeEParOuImpar(33)
        console.log(numeroPar)

   // d)
        function recebeEImprimeMensagem(string){
            let mens = (string)
             return mens
        }
        recebeEImprimeMensagem("Olá, estou aprendendo funções.")
        let mensagem = recebeEImprimeMensagem("Olá, estou aprendendo funções.")
        console.log(mensagem.length, mensagem.toUpperCase())

// 3.Questão


     let numero01 = Number(prompt("Digite um número"))
     let numero02 = Number(prompt("Agora digite outro número"))
     console.log(`Números insridos: ${numero01} e ${numero02}`)
     
       function somarnumeros(){
           let adicao = (numero01 + numero02)
           return adicao
       }
       somarnumeros()
       let soma1 = somarnumeros()
       console.log(`soma: ${soma1}`)



       function subtrairNumeros(){
           let subtracao = (numero01 - numero02)
           return subtracao
       }
       subtrairNumeros()
       let sub1 = subtrairNumeros()
       console.log(`diferença: ${sub1}`)



       function multiplicarNumeros(){
           let multiplicacao = (numero01 * numero02)
           return multiplicacao
       }
       multiplicarNumeros()
           let multip1 = multiplicarNumeros()
           console.log(`multiplicação: ${multip1}`)
       

       

       function dividirNumeros(){
           let divisao = (numero01 / numero02)
           return divisao
       }
       dividirNumeros()
       let div1 = dividirNumeros()
       console.log(`divisão: ${div1}`)






         