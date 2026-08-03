let produto = [
    {id:1, nome:"celular"},
    {id:2, nome:"computador"}
]
let encontrado = produto.find(function(intem){
    return intem.id===2
})
console.log(encontrado)