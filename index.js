console.log("Script Inicializado!")
//Aqui eu defino que o meu Java conheça os meu inputs

const inputNome = document.getElementById("inptNome");
const inputSenha = document.getElementById("inptSenha")
const btnEntrar =  document.getElementById("btnEntrar");

btnEntrar.addEventListener('click',BtnAction);

let nome ="";
let senha ="";


function BtnAction(){
    nome =  inputNome.value;
    senha = inputSenha.value;


    leituraTxt()
    .then(resposta => {
        console.log(resposta)

        if (resposta) {
            // usuário válido
            window.location = "./home.html"
        }
        else{
            // Algo deu errado
            alert("Algo deu errado")
            esvaziar_content()
        }
    })

    

    console.log("Btn Clicado!");

    

}

async function leituraTxt(){
    console.log(nome,senha)
     return fetch("credenciais.txt")
     .then(retorno => retorno.text())
     .then(text => {
        return validateUser(text)
     })
     
    .catch(error => {
        console.error("Erro ao ler o arquivo", error);
        alert("Erro ao validar o usuário")
    })

}

function validateUser(credenciais){
    let txtNome = credenciais.split("/")[0].trim();
    let txtSenha = credenciais.split("/")[1].trim();
    console.log(nome,senha);
    console.log(txtNome,txtSenha);
    console.log(nome == txtNome && senha == txtSenha);
    return nome == txtNome && senha == txtSenha
}


function esvaziar_content(){
    inputNome.value = "";
    inputSenha.value = "";
}