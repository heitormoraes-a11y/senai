let num1 = 84;
let num2 = 38;
let operador = "*";

switch(operador) {
    case "+":
        console.log(num1 + num2)
    break;
    case "-":
        console.log(num1 - num2)
    break;
    case "*":
        console.log(num1 * num2)
    break;
    case "/":
    if (num2 == 0){
        console.log("O numero não tem divisão")
    }else {
        console.log(num1 / num2)
    }
    break;
    default:
        console.log("error 404")
}