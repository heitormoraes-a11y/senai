let aluno =[
    {nome: "heitor",notas:7},
    {nome: "bruno",nota:2}
]
let nomes = aluno.map(function(aluno){
    return aluno.nome
})
console.log(nomes)