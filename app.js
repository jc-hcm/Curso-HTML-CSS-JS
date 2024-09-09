//console.log(Olá Mundo!!");
console.log(dados); // tudo
console.log(dados[0]); // dado conforme o indice
console.log(dados[0].titulo); // somente um campo

function pesquisar(){
    //console.log("clicou");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //console.log(campoPesquisa);

    let section = document.getElementById("resultados-pesquisa");
    //console.log(section);

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite algo para pesquisar</p>";
        return;
    }

    let resultados = "";
    let titulo     = "";
    let descricao  = "";
    let tag        = "";

    //campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        
        titulo    = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag       = dado.tag.toLowerCase();
        
        //console.log(dado.titulo.includes(campoPesquisa));
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
        if (!resultados) {
            resultados = "<p>Nenhum resultado encontrado</p>";
        }
    }

    section.innerHTML = resultados;
}

