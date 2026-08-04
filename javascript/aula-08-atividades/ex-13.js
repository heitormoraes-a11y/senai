let frutas = ['maçã','banana','laranja','uva']

let result = frutas.find(function(item){
    return item.startsWith('l')
})
console.log(result)