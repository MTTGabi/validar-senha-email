let email = document.getElementById('email')
let senha = document.getElementById('senha')

function erro(){
    senha.style.border='solid 5px #ff2d00'
}
function acerto(){
    senha.style.border='solid 3px #008000'
}  
function erroemail(){
    email.style.border='solid 5px #ff2d00'
}
function acertoemail(){
    email.style.border='solid 3px #008000'
}  
document.getElementById('btn-login').addEventListener('click', function verificarSenha(){
   if(senha.value.length < 8||
     !senha.value.match(/[a-z]/)||
     !senha.value.match(/[A-Z]/)||
     !senha.value.match(/[0-9]/)||
     !senha.value.match(/[^a-zA-Z0-9]/)
   ){
    // mensagem.innerHTML="senha inválida"
    erro()
   } else{
    // mensagem.innerHTML="senha válida"
    acerto()
   }
}
)
document.getElementById('btn-login').addEventListener('click',
function verificarEmail(){
    if(email.value ==='pinkmary7@gmail.com'){
      acertoemail()
    }else{
        erroemail()
    }
})
