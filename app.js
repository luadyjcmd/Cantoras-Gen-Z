function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p class=mais-info-link> Nada foi encontrado. Você não digitou nada. </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao ="";
    let albums_e_eps = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        albums_e_eps = dado.albums_e_eps.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || albums_e_eps.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" class="titulo-link">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao} </p>
                <p class="albuns-eps"> Álbuns e EPs: ${dado.albums_e_eps} </p>
                <a href= ${dado.link} target="_blank" class="mais-info-link">Mais informações sobre a artista.</a>
                <a href= ${dado.insta} target="_blank" class="instagram-link">Instagram da cantora.</a>
            </div>
            `;
        };
        
    };

    if (!resultados) { 
        resultados = "<p class=mais-info-link> Nada foi encontrado. </p>"
    }
    
    
    section.innerHTML = resultados;
};

