var agora = new Date ()
var diaSem = agora.getDay()


/*console.log(diaSem)*/
diaSem = 0

switch (diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[erro] Dia inválido')
}