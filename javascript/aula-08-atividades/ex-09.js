let produtos = [
    {nome:"mouse",preco:50},
    {nome:"teclado",preco:120},
    {nome:"monitor",preco:800},
]
let result = produtos.filter(function(item){
    return item.preco >60
})
console.log(result)
