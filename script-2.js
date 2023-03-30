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
            console.log(livros)

            console.log(livros[0].id)
            console.log(livros[0].title)
            console.log(livros[0].description)


        }




    })    
}      