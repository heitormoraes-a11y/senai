let alunos = [
    {nome:"heitor",nota:9},
    {nome:"bruno",nota:2}
]
let aprovados = alunos.filter(function(aluno){
    return aluno.nota>=7
})
console.log(aprovados)