/*Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
*/
const arrayNumeros = [7,9,5,6,3,4]
const arrayString = ["Banana","Maca","Pera"]
const arrayVariado = [5,"Banana",false]
console.log(arrayNumeros)
console.log(arrayString)
console.log(arrayVariado)

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
copiaArrayNumeros = arrayNumeros.slice()
arrayNumeros.push(666)
console.log(arrayNumeros)
console.log(copiaArrayNumeros)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
copiaArrayString = arrayString.slice()
arrayString.pop()
console.log(arrayString)
console.log(copiaArrayString)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;*/
copiaArrayVariado = arrayVariado.slice()
arrayVariado.splice(1,1)
console.log(arrayVariado)
console.log(copiaArrayVariado)