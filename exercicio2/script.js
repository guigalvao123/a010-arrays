/*# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
*/

const arrayNumeros = [7,9,5,6,3,4]
const arrayString = ["Banana","Maca","Pera"]
const arrayVariado = [5,"Banana",false]

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumeros.length)
console.log(arrayString.lenght)
console.log(arrayVariado.lenght)

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNumeros[0])
console.log(arrayString[1])
console.log(arrayVariado[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.*/
console.log(arrayNumeros.includes(7))
console.log(arrayVariado.includes(true))
