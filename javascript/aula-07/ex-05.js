function verifIdade(idade){
    if(idade < 12){
        return "Criança"
    }else if(idade < 18){
        return "Adolescente"
    }else if(idade < 64){
        return "Adulto"
    }else{
        return("idoso")
    }
}
let idades = [15,26,34,59,89]
    idades.forEach(function(item){
        console.log(verifIdade(item))
    })