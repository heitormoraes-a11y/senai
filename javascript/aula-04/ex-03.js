let celular = {
    marca: "xiaomi",
    modelo:"14",
    ano: 2025 ,
    cor:"preto",
}

for(let chave in celular) {
    console.log(`${chave} - ${celular[chave]}`)
}