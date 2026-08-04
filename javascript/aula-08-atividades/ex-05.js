let frutas = ['maça','banana','uva',]

let pref = "fruta:"
let result = frutas.map(function(item){
    return pref + item
})
console.log(result)