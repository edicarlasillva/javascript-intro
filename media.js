let nota1 = 9
let nota2 = 5
let nota3 = 4

let peso1 = 2
let peso2 = 3
let peso3 = 5

let media

media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

console.log(media)

if (media >= 7) {
  console.log("Parabéns!", media)
} else {
  console.log("Precisa estudar mais.", media)
}