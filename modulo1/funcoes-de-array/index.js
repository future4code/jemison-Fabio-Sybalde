/*RESPOSTA DO EXERCÍCIO DE INTERPRETAÇÃO FUNÇÕES DE ARRAYS

1. Questão

R = Será impresso um array só com os ítens dentro desse array, outra array só com as posições desse array e por último o próprio array completo.


2. Questão

R = Será impresso um novo array só com os ítens "nome" dos objetos dentro do array.


3. Questão

R = serão impressos todos os ítens "apelidos" dos objetos dentro do array que forem diferentes de "Chijo".


*/

// RESPOSTA DOS EXERCÍCIOS DE ESCRITA DE CÓDIGO FUNÇÕES DE ARRAYS


// 1. Questão

   // a)
       const pets = [
          { nome: "Lupin", raca: "Salsicha"},
          { nome: "Polly", raca: "Lhasa Apso"},
          { nome: "Madame", raca: "Poodle"},
          { nome: "Quentinho", raca: "Salsicha"},
          { nome: "Fluffy", raca: "Poodle"},
         { nome: "Caramelo", raca: "Vira-lata"},]
       
       let nomeDosPets = pets.map((pet) => {
               return pet.nome
       })
       console.log(nomeDosPets)


   // b) 
        let cachorroSalsicha = pets.filter((pet) => {
             return  pet.raca === "Salsicha"
        })
        console.log(cachorroSalsicha)


   // c)
        let cachorroPoodle = pets.filter((pet) => {
             return pet.raca ==="Poodle"
        })
         
        let mensagemDesconto = cachorroPoodle.map((pet) => {
              return `Voce ganhou um cupom de desconto de 10 % para tosar a/o ${pet.nome}!`
        })
        console.log(mensagemDesconto)

// 2. Questão

   // a)
   const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

     let nomesDosProdutos = produtos.map((produto) => {
            return produto.nome
     })
     console.log(nomesDosProdutos)

   // b)
             // CALCULO DA PORCENTAGEM
        let produtosComdesconto = produtos.map((produto, index, array) => {
              let precoOriginal = produto.preco
              let valorComdesconto = precoOriginal*0.05.toFixed()
              precoOriginal = precoOriginal*0.95
              return produto.preco - valorComdesconto

        })
        let listaDeNomes = produtos.map((produto) => {
          return produto.nome
    })
          //LÓGICA PRA REMOVER A CATEGORIA DOS OBJETOS
    let novaLista = []
    function nomeEPreco(produto1, produto2){
         for(let i = 0; i < produto1.length; i++){
              let novoObjeto = {
                   nome: produto1[i],
                   preco: produto2[i]    
              }
              novaLista.push(novoObjeto)
         }
         console.log(novaLista)
    }

 nomeEPreco(listaDeNomes, produtosComdesconto)
 
     
        
        


   // c)
        let catBebidas = produtos.filter((produto) => {
              return produto.categoria === "Bebidas"
        })
        console.log(catBebidas)


   // d)
        let nomes = produtos.filter((produto) =>{
              if(produto.nome.includes("Ypê")){
                  return produto.nome
              }
        })
        console.log(nomes) 

   // e)
        let frase = nomes.map((produto) => {
             return `Compre ${produto.nome} por ${produto.preco}.`
        })
        console.log(frase)




 // DESAFIOS

 // 1. Questão

      // a)
      const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]

     let nomesPokemons = pokemons.map((pokemon) => {
            return pokemon.nome
     })
     console.log(nomesPokemons.sort())


     // b) 
     let tipoPokemons = pokemons.map((pokemon) =>{
             return pokemon.tipo
     })
     let listaTipos = tipoPokemons.filter((tipo, index) => {
          return tipoPokemons.indexOf(tipo) === index
     })
     console.log(listaTipos)
     
     
           
     
          

    
       



     

        


  