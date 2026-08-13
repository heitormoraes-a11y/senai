function buscaBinaria(array, alvo) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    let meio = Math.floor((esquerda + direita) / 2);
    if (array[meio] === alvo) {
      return meio; 
    } else if (array[meio] < alvo) {
      esquerda = meio + 1; 
    } else {
      direita = meio - 1; 
    }
  }
  return -1; 
}


let numeros = ;
console.log(buscaBinaria(numeros, 17)); 
console.log(buscaBinaria(numeros, 10)); 