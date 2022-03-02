var mensagem = "Hello word por variavel"

//window.alert('Hello word'); //emite um alerta no navegador com essa mensagem
//window.alert(mensagem)

/**
 * comentário grande
 * 
 */

var a = 2;
var b = 3;
var resul = (a + b) / 2
//window.alert(resul)
//alert(9%2)//resto da divisao

//verifica se é impar
if(b%2 == 1){ // tem o == verifica se é igual e tem o === verifica se é igual e do mesmo tipo
    //alert("Impar b")
}else if (a%2 == 1){
    //alert("impar a")
}else{
    //alert("par todos")
}

var i = 0

while (i<3){
    //alert(i)
    i += 1
}

for(var j = 0; j < 3; j++){
    //alert(j)
}


var numero = 1;
var decimal = 4.5;
var texto = "texto"
var listas = ["Laranja", "Maçâ", "banana"]

//alert(listas[2])//imprime a banana

for (i in listas){ // passa em todo o vetor
  //  alert(i)
 //   alert(listas[i])
}

console.log("Hello word") // imprime na saida/console do navegador ou IDE



function soma(a, b){
    console.log(a + b)
}
soma(20,20)//

//função em variável
function fun(a,b){
    return a-b
}
var func = fun(4,2)
console.log(fun(5,5))

function msg(){
    alert("Nao clique" + a)
}

function corr(cor){
    var elemento = document.getElementById("mensagem")
    elemento.style.color = cor; //se fosse a cor escrita aqui teria os '' tipo elemento.style.color = 'red';
}

function valida(){
    var nome = document.getElementById('nome');
    alert(nome.value)
    nome.value == "" ? alert("campo sem nada") : alert("Campo preenchido com sucesso") //If mais simples
}
