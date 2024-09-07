function pesquisar() 
{
    // Busca o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa ) 
    {
      section.innerHTML = "Nenhum critério de pesquisa foi informado!"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = ""
    let montadora = ""
    let destaque = ""
  
    // Itera sobre cada item do array de dados
    for (let dado of dados) 
    {
      montadora = dado.montadora.toLowerCase()
      destaque = dado.destaque.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (montadora.includes(campoPesquisa) || destaque.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
      {
      // Concatena HTML para criar um novo item de resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.montadora}</a>
          </h2>
          <p class="descricao-meta">${dado.destaque}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      ` 
      }
    }


    // Atribui os resultados formatados ao conteúdo HTML da seção
    if (!resultados)
    {
      resultados = "<p> Nada foi encontrado </p>"
    }
    section.innerHTML = resultados;
}