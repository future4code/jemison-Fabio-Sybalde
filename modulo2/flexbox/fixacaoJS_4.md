
```javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesNumeroEscolhido = 0
  arrayDeNumeros.filter((numEscolhido) =>{
    if(numEscolhido === numeroEscolhido){
      vezesNumeroEscolhido += 1
    }
  })
  
  if(vezesNumeroEscolhido === 0){
    return `Número não encontrado`
  } else{
    return `O número ${numeroEscolhido} aparece ${vezesNumeroEscolhido}x`
  }
}

```