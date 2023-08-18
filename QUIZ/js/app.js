


const resultado = document.getElementById("resultado")
function verificarResposta(resposta){
    if(resposta === "d"){
        resultado.innerHTML = "resposta correta"
        resultado.style.color = "white"
        resultado.style.backgroundColor = "green"
        resultado.style.width = "120px"
        resultado.style.height = "420px"
        resultado.style.textAlign = "center"
    } else{
        resultado.innerHTML = "resposta incorreta"
        resultado.style.color = "white"
        resultado.style.backgroundColor = "red"
        resultado.style.width = "100px"
        resultado.style.height = "40px"
        resultado.style.textAlign = "center"
    }

}

const resultado_dois = document.getElementById("resultado_dois")
function verificarResposta_dois(resposta){
    if(resposta === "a"){
        resultado_dois.innerHTML = "resposta correta"
        resultado_dois.style.backgroundColor = "green"
        resultado_dois.style.color = "white"
        resultado_dois.style.width = "100px"
        resultado_dois.style.height = "40px"
        resultado_dois.style.textAlign = "center"
    } else{
        resultado_dois.innerHTML = "resposta incorreta"
        resultado_dois.style.backgroundColor = "red"
        resultado_dois.style.color = "white"
        resultado_dois.style.width = "100px"
        resultado_dois.style.height = "40px"
        resultado_dois.style.textAlign = "center"
    }

}



const resultado_tres = document.getElementById("resultado_tres")
function verificarResposta_tres(resposta){
    if(resposta === "a"){
        resultado_tres.innerHTML = "resposta correta"
        resultado_tres.style.backgroundColor = "green"
        resultado_tres.style.color = "white"
        resultado_tres.style.width = "100px"
        resultado_tres.style.height = "40px"
        resultado_tres.style.textAlign = "center"
    } else{
        resultado_tres.innerHTML = "resposta incorreta"
        resultado_tres.style.backgroundColor = "red"
        resultado_tres.style.color = "white"
        resultado_tres.style.width = "100px"
        resultado_tres.style.height = "40px"
        resultado_tres.style.textAlign = "center"
    }

}




