"use strict";

/// operações em arrray

/*
const arr = [1, 3, 54, 8, 4, 9];
// map percorre o vetor e retorna uma informaçao de dentro dele
const newArr = arr.map(function(item, index) {
    return item + index;


});
console.log(newArr);
// reduce e uma forma de consumir todo o  vetor e trasformar em uma unica variavel possivelmente um numero
const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log(sum);
// filter e para fazer uma filtragem dependendo do que eu precisar sempre vai retornar true ou false
const filter = arr.filter(function(item) {
    return item % 2 === 0;
})
console.log(filter);
// find e pra encotrar uma informaçao dentro do array
const find = arr.find(function(item) {
    return item === 4;
});
console.log(find);


///desestruturação de objetos


const usuario = {
    nome: 'jefferson',
    idade: 28,
    endereco: {
        cidade: 'mineiros',
        estado: 'goias'

    }
}

const { nome, idade, endereco: { cidade } } = usuario;

*/
//rest e spread  instalar plugin do babel (@babel/plugin-proposal-object-rest-spread)
//rest pega o resto de uma desestruturaçao ou de um array (...)

/*
const usuario = {
    nome: 'jefferson',
    idade: 23,
    empresa: 'Jlinformatica'
};
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
const arr = [1, 2, 4, 5];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
*/
// spread repassa a informaçao de um array pra outra estrutura (...arr, ...arr2);

/*
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr, ...arr2];
console.log(arr3);
*/
//template strings
var nome = 'jefferson';
var idade = 28;
console.log("Meu nome e ".concat(nome, " e eu tenho ").concat(idade, " anos"));
