const form = document.querySelector("#formulario")
const busca = document.querySelector("#busca")
const display = document.querySelector("#display")

form.addEventListener("submit", event => {
    event.preventDefault()
    const pokemon = busca.value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => {
            display.innerHTML = `
                <p>Nome do Pokemon pesquisado: ${data.name}</p>
                <img src="${data.sprites.front_default}" alt="Imagem do ${data.name}">
            `
        })
})