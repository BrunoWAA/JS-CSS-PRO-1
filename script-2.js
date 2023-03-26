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
            const responseData = await response.json()
            return responseData


        }




    })    
}      