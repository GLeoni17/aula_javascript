function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("www.google.com.br"); //Outra aba
    //window.location.href = "www.google.com.br"; Mesma aba
}

function trocar(elemento) {
    document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return false.replace(nome, novo_nome);
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5, 10))
var idade = prompt("Qual sua idade");

/*
var d = new Date();
alert(d.getMonth() + 1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getFullYear());
var1 = 1;
var2 = 2;
console.log(var1 + var2 + 1425 + "-" + 1519);


var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}

var count = 5;
while (count < 5) {
    console.log(count);
    alert(count);
    count++;
}

var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}


var fruta = [{ nome = "maça", cor = "vermelha" }, { nome = "uva", cor = "roxa" }];

console.log(fruta[1].nome);
alert(fruta.cor);

var fruta = { nome = "maça", cor = "vermelha" };
console.log(fruta.nome);
alert(fruta.cor);

-----

var lista = ["maça", "pêra", "laranja"];

lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length());
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
//alert(lista[1]);

-----

var nome = "Gabriel Leoni";
//var idade = 17;
//var idade2 = 18;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
//console.log(idade + idade2);
console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil")); 


var idade = prompt("Qual sua idade"); - IMPORTANTE -

*/