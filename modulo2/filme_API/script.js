const frmPesquisa = document.querySelector("form");
const apiKey = '200dfaac';
const lista = document.querySelector(".lista");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") {
        alert("Preencha o campo!");
        return;
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apiKey=${apiKey}`)
    .then(result => result.json())
    .then(json => {
                if (json.Response === "True") {
                    lista.innerHTML = ''; // Limpa a lista de resultados anteriores
                    json.Search.forEach(filme => {
                        const item = document.createElement('div');
                        item.classList.add('item');
                        
                        item.innerHTML = `
                            <img src="${filme.Poster}" alt="${filme.Title}">
                            <h2>${filme.Title}</h2>
                        `;
                        lista.appendChild(item);
                    });
                } else {
                    lista.innerHTML = '<p>Nenhum filme encontrado.</p>';
                }
            })
            .catch(error => console.log("Erro: ", error));
        }
        
