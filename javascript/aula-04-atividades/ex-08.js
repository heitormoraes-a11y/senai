let carro = {
    marca:"volkswagem",
    modelo:"jetta",
}
console.log(carro);
carro.cor = 'preto';
carro.placa ='WKA7H86'
carro.ano = 2006;
console.log(carro);

delete carro.placa;
console.log(carro);