let nome = document.getElementById('nome').value;
let idade = document.getElementById('idade').value;
let verficar = document.getElementById('verificar')

function verificaIdade(){
    if(idade >=18) return "maior de 18anos"
    else return "menor de 18 anos"
}