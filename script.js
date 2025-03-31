// Dados dos projetos
const projetos = [
  {
    titulo: "GitHub",
    descricao: "Projetos hospedados .",
    link: "https://github.com/Yago129",
  },
  {
    titulo: "Linkedin",
    descricao: "Perfil pessoal ",
    link: "https://www.linkedin.com/in/yago-correa-124ab3281/",
    
  },
];

// Função para carregar projetos na página
function carregarProjetos() {
  const projetosGrid = document.getElementById("projetos-grid");

  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.classList.add("projeto-card");

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;

    projetosGrid.appendChild(card);
  });
}

// Carregar projetos quando a página for carregada
window.onload = carregarProjetos;
document.getElementById("logo-button").addEventListener("click", function () {
  window.location.href = "#home";
});