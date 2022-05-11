/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    console.log(`Boas vindas ao jogo de BlackJack!`)

    const carta = comprarCarta();

    if (confirm(`Quer iniciar uma nova rodada?`)) {
      let cartaUsuario01 = comprarCarta()
      let cartaUsuario02 = comprarCarta()
      let cartaComputador01 = comprarCarta()
      let cartaComputador02 = comprarCarta()

      let pontosDoUsuario = (cartaUsuario01.valor + cartaUsuario02.valor)
      let pontosDoComputador= (cartaComputador01.valor + cartaComputador02.valor)

      console.log(`Cartas do usuário - ${cartaUsuario01.texto} ${cartaUsuario02.texto}: ${pontosDoUsuario}`)
      console.log(`Cartas do computador - ${cartaComputador01.texto} ${cartaComputador02.texto}: ${pontosDoComputador}`)

      if (pontosDoUsuario > pontosDoComputador){
        console.log(`Parabéns! Você venceu!!`)
      } else if (pontosDoComputador > pontosDoUsuario){
        console.log(`O compurador venceu.`)
      } else if (pontosDoUsuario === pontosDoComputador) {
        console.log(`Opa, Empatou. Tente de novo.`)
      }

    } else {
      console.log(`O jogo acabou!`)
    }