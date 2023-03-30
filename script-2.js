window.addEventListener("load", function(){
    mostrarLivro()
})


function mostrarLivro ()
{ 
    document.getElementById("buscarLivro").addEventListener("click", function ()
    {
        buscarLivros()
        async function buscarLivros()
        {
            const url = `https://target-api-simples.cyclic.app/livros`

            const response = await fetch(url)
            const livros = await response.json()
            let contador = 0
            
            function tabela(){

                let tbody = document.getElementById("tbody")

                for (contador; contador<livros.length; contador++)
                {

                    console.log("Entrou no for")
                    console.log(livros[contador].id)
                    console.log(livros[contador].title)
                    console.log(livros[contador].description)
                    let tr = tbody.insertRow();
                    

                    let ordem = tr.insertCell()
                    let td_id = tr.insertCell();
                    let td_title = tr.insertCell();
                    let td_description = tr.insertCell();


                    ordem.innerText = contador+1
                    td_id.innerText = livros[contador].id
                    td_title.innerText = livros[contador].title
                    td_description.innerText = livros[contador].description

                    document.getElementById("tabela").style.display = "inline-block";




        
                }
            }
            tabela()    


        }




    })    
}      