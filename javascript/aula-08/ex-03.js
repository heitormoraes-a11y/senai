let contatos = [
    {id:1, nome:"heitor"},
    {id:6, nome:"bruno"}
]

let encontrado = contatos.find(function(item){
    
    return item. id === 1
})
console.log(encontrado)