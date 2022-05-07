
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
       // OBJETO COM FUNÇÃO DE SORTEIO DE CARTAS
        const carta = comprarCarta();

//      ***INÍCIO DA PARTIDA***

  let cartaUsuario01 = comprarCarta()
  let cartaUsuario02 = comprarCarta()
  let cartaComputador01 = comprarCarta()
  let cartaComputador02 = comprarCarta()
  let terceiraCartaUsuario = comprarCarta()
  let ultimaCartausuario = comprarCarta()
  let terceiraCartaPC = comprarCarta()
  let ultimaCartaPC = comprarCarta()

  let parcialUsuario1 = (cartaUsuario01.valor + cartaUsuario02.valor)
  let parcialComputador1 = (cartaComputador01.valor + cartaComputador02.valor)
  let parcialUsuario2 = (parcialUsuario1 + terceiraCartaUsuario.valor)
  let parcialComputador2 = (parcialComputador1 + terceiraCartaPC.valor)
  let resultadoFinalUsuario = (parcialUsuario2 + ultimaCartausuario.valor)
  let resultadoFinalPC = (parcialComputador2 + ultimaCartaPC.valor)


       // ***FUNÇÕES QUE INFORMAM OS RESULTADOS***


  function informaVitoriaUsuario(string){
   return confirm(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1} \n A carta revelada do computador é ${cartaComputador01.texto}. \n Você deseja comprar mais uma carta?`)
}

  function segundaPergunta(string){
     return confirm(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2} \n A carta revelada do computador é ${cartaComputador01.texto}. \n Você deseja comprar mais uma carta?`)
  }

  function vitoriaPc(string){
     return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n O computador venceu.`)
  }

  function vitoriaUsuario(sreing){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n Parabéns, você venceu!!`)
  }

  function vitoriaPCfinal(string){
     return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n O computador venceu.`)
  }

  function vitoriaUsuarioFinal(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n Parabéns, você venceu!!`)
  }

  function vitoriaFinalPC1(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n O computador venceu.`)
  }

  function vitoriaFinalPc(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n O computador venceu.`)
  }

  function vitoriaUsuario1(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Parabéns, você venceu!!`)
  }

  function vitoriaUsuario2(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n Parabéns, você venceu!!`)
  }

  function finalEmpate(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Empatou. Tente novamente.`)
  }

  function vitoriaPc1(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n O compurador venceu.`)
  }

  function vitoriaUsuario3(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n parabéns, você venceu!!`)
  }

  function vitoriaPc2(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n O computador venceu.`)
  }

  function vitoriaUsuario4(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n parabéns, você venceu!!`)
  }

  function vitoriaPc3(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n O computador venceu.!`)
  }

  function vitoriaUsuario5(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n parabéns, você venceu!!`)
  }

  function empatou(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} e ${cartaUsuario02.texto}. Sua pontuação é: ${parcialUsuario1}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Empatou. Tente novamente.`)
  }

  function vitoriaUsuario6(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n Parabéns, você venceu!!`)
  }

  function vitoriaPc4(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} e ${terceiraCartaPC.texto}. A pontuação do computador é: ${parcialComputador2}. \n O computador venceu.`)
  }

  function vitoriaUsuario7(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Parabéns, você venceu!!`)
  }

  function vitoriaPc5(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n O computador venceu.`)
  }

  function vitoriaUsuario8(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Parabéns, você venceu!!`)
  }

  function empatou1(string){
   return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto}. Sua pontuação é: ${parcialUsuario2}.\n As cartas do computador são ${cartaComputador01.texto} ${cartaComputador02.texto} ${terceiraCartaPC.texto} e ${ultimaCartaPC.texto}. A pontuação do computador é: ${resultadoFinalPC}. \n Empatou. Tente novamente.`)
  }


  function vitoriaPc6(string){
     return alert(`Suas cartas são ${cartaUsuario01.texto} ${cartaUsuario02.texto} ${terceiraCartaUsuario.texto} e ${ultimaCartausuario.texto}. Sua pontuação é: ${resultadoFinalUsuario}.\n As cartas do computador são ${cartaComputador01.texto} e ${cartaComputador02.texto}. A pontuação do computador é: ${parcialComputador1}. \n O computador venceu.`)
  }

//               *****AQUI COMEÇA O JOGO DE FATO*****

  if(confirm(`Bem vindo(a,e) ao jogo de BlackJack!  \n Quer iniciar uma nova rodada?`)) {
     if( informaVitoriaUsuario()){
        if (parcialUsuario2 > 21){
           vitoriaPc()
        }else if (parcialUsuario2 === 21 && parcialComputador1 < 21 ){
             vitoriaUsuario()
        }else if(parcialUsuario2 < 21 && parcialComputador1 < 21){
           if(segundaPergunta()){
              if(resultadoFinalUsuario > 21){
                 vitoriaPCfinal()
              }else if(resultadoFinalUsuario === 21 && parcialComputador1 !== 21){
                 vitoriaUsuarioFinal()
                 // RODADA DO COMPUTADOR SE O JOGADOR COMPRAR SÓ UMA CARTA
              }else if( resultadoFinalUsuario < 21 && resultadoFinalUsuario < parcialComputador1){
                     vitoriaPc6()
              }else if( resultadoFinalUsuario < 21 && resultadoFinalUsuario > parcialComputador1){
                 if(parcialComputador2 > 21){
                     vitoriaUsuario2()
                 }else if(parcialComputador2 > resultadoFinalUsuario && parcialComputador2 <= 21){
                      vitoriaFinalPC1()
                 }else if(parcialComputador2 < resultadoFinalUsuario && parcialComputador2 < 21){
                    if(resultadoFinalPC > resultadoFinalUsuario && resultadoFinalPC <= 21){
                       vitoriaFinalPc()
                    }else if (resultadoFinalPC < resultadoFinalUsuario && resultadoFinalPC < 21){
                       vitoriaUsuario1()
                    }else if(resultadoFinalPC === resultadoFinalUsuario){
                       finalEmpate()
                    }
                  }
               }
              // RODADA DO COMPUTADOR SE O JOGADOR COMPRAR AS DUAS CARTAS
           }else if(parcialUsuario2 < 21 && parcialUsuario2 < parcialComputador1){
                 vitoriaPc()
           }else if(parcialUsuario2 < 21 && parcialUsuario2 > parcialComputador1){
                if(parcialComputador2 > 21){
                    vitoriaUsuario6()
                }else if(parcialComputador2 > parcialUsuario2 && parcialComputador2 <= 21){
                     vitoriaPc4()
                }else if(parcialComputador2 < 21 && parcialComputador2 < parcialUsuario2){
                   if(resultadoFinalPC > 21){
                       vitoriaUsuario7()
                   }else if(resultadoFinalPC > parcialUsuario2 &&  resultadoFinalPC <= 21){
                      vitoriaPc5()
                   }else if(resultadoFinalPC < parcialUsuario2 && resultadoFinalPC < 21){
                       vitoriaUsuario8()
                     }else if(resultadoFinalPC === parcialUsuario2){
                        empatou1()
               }
            }
           }
        }
      
        //RODADA DO COMPUTADOR SE O JOGADOR NÃO QUISER COMPRAR CARTA
     }else if(parcialUsuario1 < 21 && parcialUsuario1 < parcialComputador1){
               vitoriaPc1()
     }else if(parcialUsuario1 < 21 && parcialUsuario1 >= parcialComputador1){
        if(parcialComputador2 > 21 ){
               vitoriaUsuario3()
        }else if(parcialComputador2 > parcialUsuario1 && parcialComputador2 <= 21){
              vitoriaPc2()
        }else if(parcialComputador2 < 21 && parcialComputador2 <= parcialUsuario1){
           if(resultadoFinalPC > 21 ){
               vitoriaUsuario4()
           }else if(resultadoFinalPC > parcialUsuario1 && resultadoFinalPC <= 21 ){
                vitoriaPc3()
           }else if (resultadoFinalPC < parcialUsuario1 && resultadoFinalPC < 21){
                 vitoriaUsuario5()
           }else if(resultadoFinalPC === parcialUsuario1){
                 empatou()
           }
        }
      }
     }else{
        alert(`O jogo acabou! Muito obrigado.`)
     }