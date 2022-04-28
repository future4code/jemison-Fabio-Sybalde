// **RESPOSTAS DOS EXERCÍCIOS DE INTERPRETAÇÃO**


/*  1. Questão--

       a) Matheus Nachtergaele;
          Virginia Cavendish;
          canal: "Globo", horario: "14h"

    
    2. Questão--

      a) console.log(cachorro)
          {nome: "juca", idade: 3, raca: "SRD"}

         console.log(gato)
          {nome: "juba", idade: 3, raca: "SRD"}
            

         console.log(tartaruga)
          {nome: "jubo", idade: 3, raca: "SRD"}
            

      b) Adiciona todos as chaves do objeto para dentro novo objeto que está sendo criado.
     
     
    3. Questão--

      a) false
         undefined


      b) Eu acho que o primeiro console está imprimindo falso porque este é o valor da propriedade backender da chave que está dentro do objeto (pessoa) que, por sua vez, está sendo chamada na função minhaFuncao().

      Já o valor undefined está sendo impresso no segundo console pois dentro do objeto (pessoa) não foi definida essa propriedade.
*/


//  **RESPOSTAS DO EXERCÍCIO DE ESCRITA DE CÓDIGO**


// 1. Questão

   // a) 

         const comoMeChamam = {
             nome: "Fábio",
             apelidos: ["Faboo", " Fabão", " Binho"]
         }
         
           console.log(`Eu sou ${comoMeChamam.nome}, mas pode me chamar de: ${comoMeChamam.apelidos[0]},${comoMeChamam.apelidos[1]} ou${comoMeChamam.apelidos[2]}.`)



           function podeMeChamarDe(objto){
            console.log(outrosApelidos)

           }


   // b)
         const outrosApelidos = {
            ...comoMeChamam,
            apelidos: ["Inho"," Fah"," Bibo"]
        }


        podeMeChamarDe(outrosApelidos)
        



// 2. Questão

        const minhasInformações = {
            nome: "Fábio",
            idade: 28,
            profissão: "Vidraceiro"
        }

        const meuFilho = {
            nome: "Davi",
            idade: 1,
            profissão: "Nenhuma"
        }

        function informacoesPessoais(minhasInformações, meuFilho) {
              return minhasInformações, meuFilho
        }
            let minhaPessoa = [minhasInformações.nome, minhasInformações.nome.length, minhasInformações.idade, minhasInformações.profissão, minhasInformações.profissão.length]
        console.log(minhaPessoa)

            let filho = [meuFilho.nome, meuFilho.nome.length, meuFilho.idade, meuFilho.profissão, meuFilho.profissão.length]
        console.log(filho)


// 3. Questão

  // a) 
       const primeiraFruta = {
           nome: "Manga",
           disponibilidade: true
       }

       const segundaFruta = {
           nome: "Banana",
           disponibilidade: true
       }

       const terceiraFruta = {
           nome: "Acerola",
           disponibilidade: true
       }

       function recebeFrutas(primeiraFruta) {
             return primeiraFruta
       }

       let carinho = [recebeFrutas(primeiraFruta)]

       carinho.push(segundaFruta, terceiraFruta)

       console.log(carinho)















      


      







