let num = [5, 8, 2, 9, 3]
num.sort()
num.push()
console.log(num)
console.log(`O vetor tem ${num} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos== -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}