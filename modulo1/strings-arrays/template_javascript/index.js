// RESPOSTAS EXERCÍCIO DE INTERPRETAÇÃO


/*
1. Questão:

a) a. undefined;

b) b. null;

c) c. 11;

d) d. 0;

e) erro. pois a array não está definida.

f) erro. pois a array não está definida.


2. Questão:

    R= SUBI NUM ÔNIBUS EM MIRROCOS;
    27
*/

//  RESPOSTAS EXERCÍCIOS DE DIGITAÇÃO DE CÓDIGOS

// 1. Questão

    let nome = prompt("Digite seu nome")
    let email = prompt("Agora digite seu email")

    console.log (`O email ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}!`) 


// 2. Questão

    let comidas = ["Lasanha","coxinha","Feijoada","bolo","Macarronada"];

    let comidasUsuario = prompt("Digite sua comida preferida")

    let novaListaComidas = ["Lasanha", comidasUsuario, "Feijoada","Bolo","Macarronada"];


    console.log(comidas);

    for (let pos=0; pos<comidas.length;pos++) {
        console.log(`essas são minhas comidas preferidas, ${comidas[pos]}`)
        };
    
console.log(novaListaComidas);

// 3. Questão

let tarefa1 = prompt("diga uma tarefa que vc precisa fazer ao dia:")
let tarefa2 = prompt("agora diga outra tarefa:")
let tarefa3 = prompt("por último fale mais uma tarefa:")
let indice = (prompt("agora digite um número de 1 a 3:"))

 let listaDeTarefas = [tarefa1, tarefa2, tarefa3]
 
 let novalistaDeTarefas = [listaDeTarefas.splice(indice-1)]

 console.log(listaDeTarefas)

 

 






