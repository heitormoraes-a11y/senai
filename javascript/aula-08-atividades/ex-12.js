let usuarios = [
    {id:1, nome:'joão'},
    {id:2, nome:'maria'},
    {id:3, nome:'pedro'}
]
let result = usuarios.find(function(item){
    return item.id === 2
})
console.log(result)
