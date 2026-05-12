const coresTipos = {
  fire: "#f97316",
  water: "#3b82f6",
  grass: "#22c55e",
  electric: "#facc15",
  psychic: "#ec4899",
  ice: "#67e8f9",
  dragon: "#8b5cf6",
  dark: "#374151",
  fairy: "#f9a8d4",
  poison: "#a855f7",
  bug: "#84cc16",
  normal: "#a3a3a3",
  fighting: "#dc2626",
  ground: "#a16207",
  rock: "#78716c",
  ghost: "#7c3aed",
  steel: "#94a3b8",
  flying: "#60a5fa"
};

async function buscarPokemon() {

  const nome = document
    .getElementById("nomePokemon")
    .value
    .toLowerCase()
    .trim();

  const resultado = document.getElementById("resultado");

  if(nome === ""){
    resultado.innerHTML = `
      <div class="pokemon">
        <h2>Digite um Pokémon</h2>
      </div>
    `;
    return;
  }

  resultado.innerHTML = `
    <div class="pokemon">
      <h2>Carregando...</h2>
    </div>
  `;

  try{

    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nome}`
    );

    if(!resposta.ok){
      throw new Error("Pokémon não encontrado");
    }

    const pokemon = await resposta.json();

    const tipos = pokemon.types.map(tipo => `
      <span 
        class="tipo"
        style="background:${coresTipos[tipo.type.name]}"
      >
        ${tipo.type.name}
      </span>
    `).join("");

    const stats = pokemon.stats.map(stat => `
      <div class="stat">

        <div class="stat-topo">
          <span>${stat.stat.name}</span>
          <span>${stat.base_stat}</span>
        </div>

        <div class="barra">
          <div 
            class="progresso"
            style="width:${stat.base_stat}%"
          ></div>
        </div>

      </div>
    `).join("");

    resultado.innerHTML = `
      <div class="pokemon">

        <img 
          src="${pokemon.sprites.other['official-artwork'].front_default}"
          alt="${pokemon.name}"
        >

        <h2>
          #${pokemon.id} ${pokemon.name}
        </h2>

        <div class="tipos">
          ${tipos}
        </div>

        <div class="info">

          <p>
            <b>Altura:</b>
            ${pokemon.height / 10} m
          </p>

          <p>
            <b>Peso:</b>
            ${pokemon.weight / 10} kg
          </p>

          <p>
            <b>Habilidades:</b>
            ${pokemon.abilities.map(
              a => a.ability.name
            ).join(", ")}
          </p>

        </div>

        <div class="stats">
          ${stats}
        </div>

      </div>
    `;

  }catch(erro){

    resultado.innerHTML = `
      <div class="pokemon">
        <h2>${erro.message}</h2>
      </div>
    `;
  }
}

document
  .getElementById("nomePokemon")
  .addEventListener("keypress", function(event){

    if(event.key === "Enter"){
      buscarPokemon();
    }

});