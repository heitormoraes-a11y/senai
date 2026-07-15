let produtos = [
    {nome:"tv", preco:1999.99, categoria:"eletro"},
    {nome:"geladeira", preco:3999, categoria:"branca"},
    {nome:"PS5", preco:3500, categoria:"video game"},
    {nome:"varal", preco:300, categoria:"casa"},
    {nome:"forno", preco:590, categoria:"branca"},
]
let total = 0

produtos.forEach(function(produto)
    {console.log(`nome:${produto.nome} - preço:${produto.preco} - categoria:${produto.categoria}`)
    total = total + produto.preco;
})
console.log(`valor total é R$${total} `)