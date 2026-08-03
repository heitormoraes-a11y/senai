function listNomes(arrag){
    arrag.forEach(function(intem,indice){
        console.log(`${indice}-${intem}`)
    })
}
listNomes(["igor","heitor","pedro"])