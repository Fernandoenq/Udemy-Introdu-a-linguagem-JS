console.log("Hello word")

function hello(nome){
    console.log("Hello dentro da function " + nome)
}

hello("Fernando")

function hello2(nome){
    return "Hello dentro da function " + nome
}

var mensagem = hello2("Fernando")
console.log(mensagem)

function soma (a, b){
    return a+b
}

console.log(soma(5,5));

// Função anônima
// essa função precisa do ; e a função anterior tambem tem q ter ;

(function(c,d){
    console.log(c+d) 
})(5,5);

// invocação imediata de function expression
//Mais sobre https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function

//function expression

// var é uma variavel global
// let variavel local
// const não é variável, é valor fixo
// se quiser comentar uma área, selecione toda ela e depois de CTRL + ;

const sub = function(x,y){
    return x-y
}

let resultado = sub(2,5)

console.log("function expression simples ", resultado)

//função first-class é quando uma linguagem tem funções que são tratadas como qualquer outra variável como exemplo
const teste = function(){
    console.log("Sou uma função de primeira classe")
}
//podemos chamar a função apenas digitando o nome da variável
teste();
//Mais obre elas https://developer.mozilla.org/pt-BR/docs/Glossary/First-class_Function

//Arrow Function

const subv2 = (x, y) => {
    return x - y
}
console.log("function expression simples ", subv2(2,5))

const subv3 = (x, y) => {return x - y}
console.log("Arrow function ", subv3(2,5))

const subv4 = (x, y) => x - y
console.log("Arrow function ", subv4(2,5));

//Função invocada
//dou ; na última função chamada, crio essa função sem nome e variavel, boto em versão arrow e ja chamo ela na mesma linha e depois um ;
(() => {console.log("Hello função invocada")})();
//versão mais facil de entender
(//indica escopo geral
    () => {/*criado a função anônima sem dar parâmetros*/
        console.log("Hello função invocada")
    }
)//fecha escopo geral
();//chamada da função anônima

//Spread ou  sintáxe de espalhamento

//Mais sobre https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const subv5 = (x, y, z) => x - y - z
console.log("Arrow function ", subv5(6,5,1,5));//como só recebe 3 ent o quarto valor foi ignorado
console.log("Arrow function ", subv5(6,5));//como não tem o 3 valor ent fico um valor indefinido

const subv6 = (x, y, z = 0) => x - y - z
console.log("Arrow function ", subv6(6,5));//como z tem valor padrão 0 ele considera 0 quando nao envia parâmetros
console.log("Arrow function ", subv6(6,5, 10));//Mesmo z ja tendo valor é atualizado ao que damos no parâmetro

const somav7 = (...numeros) => {
    let controle = 0 //variavel q recebe geral
    for(i of numeros){ //passa por todos os valores da variável
        controle += i //vai somando no controle
    }
    return controle // devolve o resultado da soma
}

console.log("Sintaxe de espalhamento ou SPREAD:  " + somav7(1,2,3,6,8,4,2,6,8,5,3,5,6,4))//A função tem um vetor que recebe valores ilimitados


const somar = (a, b) => a+b
console.log("SOMAR: " + somar(7,7))
const subtrair = (a, b) => a-b
console.log("SOMAR: " + subtrair(7,7))
const dividir = (a, b) => a/b
console.log("SOMAR: " + dividir(7,7))
const multiplicar = (a, b) => a*b
console.log("SOMAR: " + multiplicar(7,7))


//Operador condicional ternário

x = 7
if(x % 2 == 0){
    resultado = 'par'
}else {
    resultado = 'impar'
}
console.log(resultado)


const resultado2 = x % 2 == 0 ? 'par' : 'impar' // condição ? 'Se for verdadeiro' : 'Se for falso'
console.log(resultado2)

//MAP
//Pega um array e retorna outro de mesmo tamanho, podendo tratar o array pego

var estudantes = [//crio um array com 4 alunos e 1 nota pra cada
    {nome: "josé", nota: 5.7},
    {nome: "Maria", nota: 4.8},
    {nome: "Diego", nota: 7.5},
    {nome: "Vivian", nota: 6.7}
]

// normalizar: maior nota passa a ser 10

let notas = []//crio um array vazio que recebera apenas as notas dos estudantes

for(i of estudantes){
    notas.push(i.nota)//pegando as notas dos estudants e dando para o array notas
}

var maior_nota = Math.max(...notas)//percorre por todo o array das notas e coleta apenas a maior nota

let notas_normalizadas = estudantes.map(estudantes => (estudantes.nota*10/maior_nota).toFixed(1))//percorre por todo o array
// e armazena as notas antigas multiplicadas por 10 e divididas pela maior nota

console.log("Notas antigas eram: ", notas)
console.log("Notas antigas eram: ", notas_normalizadas)

console.log(`Notas antigas eram: " ${notas}`)
console.log(`Notas antigas eram: " ${notas_normalizadas}`)

//mais simples

function normaliza (x){ //criado uma função para mudar todas as notas(normalizar)
// tal função recebe a nota do antigo estudantes (x = estudantes.nota)
    return (x*10/maior_nota).toFixed(1)//retorna x (nota antiga) / 10 e * pela maior nota
    //Isso de cada um dos 4 alunos
    //será chamado no primeiro, depois no segundo, depois no terceiro e por fim o quarto
}

console.log(//inicia o console.log
    "Novas notas: " + // textinho  + o resto
    estudantes //pega o array estudantes
        .map(i => i.nota)//passa por todas as notas com uma arrow function e map
        .map(normaliza)//passa por todas as notas chamando a função que alterará todas as notas
)

console.log("Novas notas: " + estudantes.map(i => i.nota).map(normaliza)
)

//Filter

//Aplicar uma função em um array e retornará true or false

meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const par = i => i % 2 == 0 //crio um arrow function que retorna apenas os pares
const impares = i => i % 2 == 1 //crio um arrow function que retorna apenas os impares

console.log('pares: ', meu_array.filter(par))//chamo meu array e boto no filter a função desejada
//No caso aqui retorna apenas os pares

console.log('impares: ', meu_array.filter(impares))//chamo meu array e boto no filter a função desejada
//No caso aqui retorna apenas os impares


//Reduce

//Função aplicada em um array que retorna apenas um valor

numeros = [1,2,3,4,5]

// function somanum(total, i){
//     return total+i
// }

const somanum = (total, i) => total + i //pego meu array onde total recebe geral e o i é os valores a cada rodada
var somatorio = numeros.reduce(somanum) //chamo meu array junto com a função desejada no reduce
console.log('(Método reduce) a soma de todo o array é: ', somatorio)

//----------------------------------------------
notass = [5.7, 4.8, 7.5, 6.7] //crio o array com as notas

const somatorio2 = (total, i) => total + i // somo todas as notas
var n = notass.length //crio uma variavel com o valor da quantidade de notas
var media = (notass.reduce(somatorio2)/n).toFixed(2) //crio uma variavel que pega o somatório de todas as notas e divide pela quantidade de notas alem
//de determinar que a quantidade de casas depois da , é de 2
console.log(`A média de notas é ${media}`) //mostro a média

//O mesmo do de cima porém reduzido
var media2 = (notass.reduce((total, i) => total + i)/notass.length).toFixed(2)
console.log(`A média de notas é ${media2}`); //mostro a média


//Outra coisa
(() => console.log('a' + 'aa'))();

const somaaaa = (...ns) => {
    console.log(ns)
}
somaaaa(1,2,3)

x = n => { return n+1 }
y = n => { return x(n)*x(n-1) }
console.log(y(10))


console.log(3 + 4)

x = n => { return n+1 }
console.log(x(10))