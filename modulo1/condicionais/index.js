// **RESPOSTA DO EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO**

/* 1. Questaão


     a) O código vai pegar o número que o usuário vai digita e ver se o resto da divisão desse número por 2 resulta em 0. Se sim, o usuário passa no teste. Se não, ele não passa. 

     b) Números pares, nos quais o resto sempre será igual a 0.

     c) Números ímpares, nos quais o resto sempre será diferente de 0.


  2. Questão

     a) O código serve para informar ao usuário o preço da fruta que ele digitar no prompt.

     b) Será impresso: O preço da fruta maçã é R$ 2.25

     c) Será impresso: O preço da fruta pêra é 5


  3. Questão

     a) A primeira linha é uma variável que irá receber um número solicitado ao usuário através do prompt.

     b) Se o usuário digitar o número 10, eu acho que será impresso a mensagem "Esse número passou no teste" que está no console.log dentro da condicional. Porém, também será impresso um erro em seguida devido ao console.log que está fora do escopo da condicional que tenta imprimir a variável (mensagem), mas esta não pode ser acessada por fora do escopo da condicional sem executar o retorno dessa variável.


     c) Se o usuário digitar -10 eu acho que não será impresso nada do primeiro console.log pois a condicional só manda imprimir algo se o valor digitado for maior que 0. Contudo, ainda será impresso o mesmo erro anterior pelo mesmo motivo, a variável no console.log não pode ser acessada sem um retorno dela na condicional.
*/




//   **RESPOSTA DOS EXERCÍCIOS DE ESCRITA DE CÓDIGO**


// 1. Questão

    // a)
         let idade = Number(prompt(`Informe sua idade:`))

         if (idade >= 18) {
             console.log(`Parabéns! Você pode dirigir!!!`)
         } else {
             console.log(`Que pena. Infelizmente você não pode dirigir.`)
         } 
    

// 2. Questão

      let turno = prompt(`Em que turno você estuda? (Use M para manhã, V para tarde e N para noturno)`).toUpperCase()

      if (turno === `M`) {
          console.log(`Bom dia!`)
      } else if (turno === `V`){
          console.log(`Boa tarde!`)
      } else if (turno === `N`){
          console.log(`Boa noite!`)
      } else {
          console.log(`Turno inválido. Tente novamente.`)
      }


//  3. Questão
   
       let turnos = prompt(`Em que turno você estuda? (Use M para manhã, V para tarde e N para noturno)`).toUpperCase()

        switch (turnos){
            case `M`:
               console.log(`Bom dia!`)
            break;
            case  `V`:
               console.log(`Boa tarde!`)
            break;
            case `N`:
               console.log(`Boa Noite!`)
            break;
            default:
               console.log(`Turno inválido. Tente novamente.`)
        break;
}


//  4. Questão

     let generoDoFilmeQ4 = prompt(`Qual o gênero do filme que vamos assistir?`).toLowerCase()
     let valorDoIngressoQ4 = Number(prompt(`E qual é o valor do ingresso?`))

     if (generoDoFilmeQ4 === "fantasia" && valorDoIngressoQ4 <= 15){
         console.log(`Bom filme!`)
     } else {
         console.log(`Escolha outro filme!  :(`)
     }


       
         //  ***RESPOSTAS DOS DESAFIOS***

         // 1. Questão (Desafio)

     let generoDoFilmeDesafio = prompt(`Qual o gênero do filme que vamos assistir?`).toLowerCase()
     let valorDoIngressoDesafio = Number(prompt(`E qual é o valor do ingresso?`))

     if (generoDoFilmeDesafio === "fantasia" && valorDoIngressoDesafio <= 15){
         let docinho = prompt(`Qual lanchinho vai querer comprar`).toLowerCase()
         console.log(`Bom filme!!`)
         console.log(`Aproveite seu(sua) ${docinho}.`)
     } else {
        console.log(`Escolha outro filme!  :(`)
     }


        // 2. Questão (Desafio)

     let nomeCompleto = prompt(`Nome completo:`).toUpperCase()
     let tipoDeJogo = prompt(`Tipo de jogo:   (IN) para jogo internacional ou (DO) para jogo doméstico`).toUpperCase()
     let etapaDoJogo = prompt(`Etapa do jogo:   (SF) para semi-final, (DT) para decisão de terceiro lugar ou (FI) para final`).toUpperCase()
     let categoria = Number(prompt(`Categoria:  de 1 à 4`))
     let quantidadeDeIngressos = Number(prompt(`Quantidade de ingressos desejados:`))


     let jogoDomesticoSemiFinalCat = [1320, 880, 550, 220]
     let jogoDomesticoDecisaoCat = [660, 440, 330, 170]
     let jogoDomesticoFinalCat = [1980, 1320, 880, 330]



     if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoSemiFinalCat[0] * 4.10)}`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[0] * 4.10 * quantidadeDeIngressos)}`) 

     } else { if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoSemiFinalCat[1] * 4.10)}`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[1] * 4.10 * quantidadeDeIngressos)} `)

     } else { if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoSemiFinalCat[2] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[2] * 4.10 * quantidadeDeIngressos)}`)

     } else { if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoSemiFinalCat[3] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[3] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoDecisaoCat[0] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[0] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoDecisaoCat[1] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[1] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoDecisaoCat[2] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[2] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoDecisaoCat[3] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[3] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoFinalCat[0] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[0] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoFinalCat[1] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[1] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoFinalCat[2] * 4.10) }`)
         console.log(`Total a pagar: R$ ${math.round(jogoDomesticoFinalCat[2] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Internacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${Math.round(jogoDomesticoFinalCat[3] * 4.10) }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[3] * 4.10 * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoSemiFinalCat[0] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[0] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoSemiFinalCat[1] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[1] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoSemiFinalCat[2]}`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[2] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Semi-final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoSemiFinalCat[3] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoSemiFinalCat[3] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoDecisaoCat[0] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[0] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoDecisaoCat[1] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[1] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoDecisaoCat[2] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[2] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Decisão de terceiro lugar`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoDecisaoCat[3] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoDecisaoCat[3] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoFinalCat[0] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[0] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoFinalCat[1] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[1] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoFinalCat[2] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[2] * quantidadeDeIngressos)}`)

    } else { if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4){
         console.log(`---Dados da compra---`)
         console.log(`Nome do cliente: ${nomeCompleto}`)
         console.log(`Tipo de jogo: Nacional`)
         console.log(`Etapa do jogo: Final`)
         console.log(`Categoria: ${categoria}`)
         console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
         console.log(`---Valores---`)
         console.log(`Valor do ingresso (unidade): R$ ${jogoDomesticoFinalCat[3] }`)
         console.log(`Total a pagar: R$ ${Math.round(jogoDomesticoFinalCat[3] * quantidadeDeIngressos)}`)

     }} } }}}}}}}}}}}}}}}}}}}}}

     /*   Obs: Deve ter algum jeito de fazer esta última questão com menos códigos usando arrays, objetos ou até funções, mas eu realmente não consegui pensar em nada desse tipo que funcionasse. Então fiz do jeito mais longo e difícil mesmo kkkkk.
          De qualquer forma foi bom pra eu praticar if/else até a exaustão. 
          Então é isso. Muito obrigado e desculpa o tamanho do código. :)
    */



         
         

     

     
     
 