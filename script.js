window.addEventListener("load", function(){
    cadastrarLivro()
})

function cadastrarLivro (){

    document.getElementById("cadastro").addEventListener("click", function()
    {
        let validacaoCadastro = document.getElementById("titulo").value
        let validacaoDescricao = document.getElementById("descricao").value

        if (validacaoCadastro === "" && validacaoDescricao === "")
        {
            document.getElementById("retorno").innerHTML = "Fomulário inválido"
            document.getElementById('retorno').style.backgroundColor= "#AC6363"
            document.getElementById('retorno').style.display="inline-block"
        }
        else
        {
            fazerPost()

            async function fazerPost()
            {
                const url = "https://target-api-simples.cyclic.app/livros"
                const fetchOptions = 
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: validacaoCadastro,
                        description: validacaoDescricao
                    }),
        
                    headers: {"Content-type": "application/json"}
                }
                
                const response = await fetch (url, fetchOptions)
                constrespondeData = await response.json

                console.log(constrespondeData)

            }

            document.getElementById("retorno").innerHTML = "Enviado com sucesso!"
            document.getElementById('retorno').style.backgroundColor= "#207868"
            document.getElementById('retorno').style.display="inline-block"
            document.getElementById("titulo").value =""
            document.getElementById("descricao").value =""
    
        }
    })

}

