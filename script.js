let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeXis = document.getElementById("icone-xis")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        //mostrar o icone de X e esconder o barras
        iconeBarras.style.display = "none"
        //mostrar icone barras e esconder o X
        iconeXis.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")

        iconeXis.style.display = "none"
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        //mostrar o icone de X e esconder o barras
        iconeBarras.style.display = "none"
        //mostrar icone barras e esconder o X
        iconeXis.style.display = "inline"
    }
}

function solicitarOrcamento(event) {
    //pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById ("campo-email").value
    let valorEmpresa = document.getElementById ("campo-empresa").value
    let valorDescricao = document.getElementById ("campo-texto").value

    // organizar os valores em objetos

    let dadosForm = {
    nome: valorNome,
    email: valorEmail,
    nomeEmpresa: valorEmpresa,
    descricao: valorDescricao
}
console.log (dadosForm);    
    //enviar requisicao para API
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
      // Caso sucesso
      .then(resposta => {
          console.log(resposta);
          //limpar os inputs e mostrar um alert de sucesso
          document.querySelector("#contato form").reset()
          alert("Solicitação enviada com sucesso!! 👌👍")

      }) 
    // Caso Erro
    .catch(erro => {
        console.log (erro)
        alert ("Erro na requicição 😭😭😭")
    })
        //alerta com msg de erro

        event.preventDefault()
}