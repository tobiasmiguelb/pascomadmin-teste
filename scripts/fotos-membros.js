// scripts/fotos-membros.js

const fotoContainer = document.getElementById("foto-lateral");

// Fetch photo data from the JSON file
fetch('dados/fotos.json')
  .then(response => response.json())
  .then(fotos => {
    // Select a random photo
    const randomFoto = fotos[Math.floor(Math.random() * fotos.length)];

    // Determine the correct file extension for the author's photo
    const autorFotoPath = randomFoto.autor
      ? `imagens/membros/${encodeURIComponent(randomFoto.autor)}.png`
      : `imagens/membros/${encodeURIComponent(randomFoto.autor)}.jpg`;

    // Create and display the photo element
    const div = document.createElement("div");
    div.className = "foto-evento";
    div.innerHTML = `
      <div class="foto-principal">
        <img src="imagens/fotos/${randomFoto.arquivo}" alt="${randomFoto.evento}">
        <div class="detalhes-foto">
          <img src="${autorFotoPath}" alt="${randomFoto.autor}" class="autor-foto">
          <div class="autor-info">
            <strong>${randomFoto.autor}</strong><br/>
            <small>${randomFoto.evento}</small>
          </div>
        </div>
      </div>
    `;
    fotoContainer.appendChild(div);
  })
  .catch(error => console.error('Erro ao carregar os dados das fotos:', error));
