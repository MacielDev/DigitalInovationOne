var nome="Andre"
var idade = 36
//alert(`Bem vindo ${nome}, você possui $//{idade} anos`)

// Trabalhando com arrays-push(): Acrescenta um elemento na última posição de array

var lista =["Maçã","Pêra","Laranja"]
lista.push("Uva");
console.log(lista);


//pop() : Retira o último elemento do array
lista.pop();
console.log(lista);

//.length : retorna o tamanho do array
console.log(lista.length)

// reverse(): retorna o array ordenando da útlma para a primeira posição

const listaInvertida = lista.reverse()
console.log(listaInvertida)

//toString(): Converte o conteúdo de um array em uma String

const conteudoLista = lista.toString()
console.log(conteudoLista);

// join(): Assim como o toString() também transforma o conteúdo de um array em string, porém nos permite formatar o tipo de elemento separador

const listaComTracos = lista.join('-')
console.log(listaComTracos)

// dicionário
 const fruta = {
     nome:"Maçã",
     cor:"Vermelha",
     sabor:"doce"
 }
 // Saída toda
 console.log(fruta);
 //acessando um dos atributos
 console.log(fruta.nome)
 console.log(fruta.cor)

 //Lista de Dicionários
 var frutas=[
    {nome:"Maçã",cor:"Vermelha"} ,          {nome:"Banana",cor:"Amarela"}
 ]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[0].nome)
console.log(frutas[1].nome)


// Funções


// Função com retorno
function soma(n1,n2){
    return n1+n2;
}
console.log(soma(1,3))

function setReplace(frase, nome, novoNome){
    return frase.replace(nome,novoNome)
}
console.log("Vai Japão","Japão", "Brasil")

