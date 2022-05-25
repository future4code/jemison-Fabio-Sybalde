

```Javascript

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let totalAPagar
  if(quantidade >= 12){
    totalAPagar = quantidade * 1.00
  }else{
    totalAPagar = quantidade * 1.3
  }
  return totalAPagar
}

```