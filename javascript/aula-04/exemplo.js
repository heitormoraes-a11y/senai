let aluno = {
    nome: "heitor",
    idade: "15",
    endereco: "rua lá de casa",
}
console.log(aluno.nome)
console.log(aluno.endereco)

for(let chave in aluno){
    console.log(`${chave}:${aluno[chave]}`)

}