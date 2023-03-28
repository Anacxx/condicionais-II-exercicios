let nacionalidade = prompt("Digite aqui a nacionalidade: 1 p/ brasileira, 2 p/ argentina, 3 p/ uruguaia, 4 p/ chilena 5 p/ colombiana").toLowerCase()

switch(nacionalidade){
    case "1":
        console.log("a pessoa é do Brasil")
        break
    case "2":
        console.log("a pessoa é da Argentina!")
        break
    case "3":
        console.log("a pessoa é do Uruguai!")
        break
    case "4": 
        console.log("a pessoa é do Chile!")
        break
    case "5":
        console.log("a pessoa é da Colômbia!")
        break
    default:
        console.log("nacionalidade não encontrada")
}       
