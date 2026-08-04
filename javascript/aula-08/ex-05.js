let produtos = [
    {id:1, nome:"fone", preco:59,categoria:"eletrônico" },
    {id:2,nome:"geladeira",preco:2599,categoria:"eletro",},
    {id:3,nome:"mouse",preco:109,categoria:"informatico"},
    {id:4,nome:"teclado",preco:299,categoria:"informatica"},
    {id:5,nome:"fogão",preco:599,categoria:"eletro",}
]
let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)
let eletro = produtos.filter(function(item){
    return item.categoria
})
console.log(eletro)
let encontrado = produtos.find(function(item){
    return item.id === 3
})
console.log(encontrado)
let nomeMaiores = produtos.filter(function(item){
    return item.preco > 599
}).map(function(item){
    return item.nome 
})
console.log(nomeMaiores)