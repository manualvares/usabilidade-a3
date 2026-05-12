const tiposFortes = {
  fire: "grass",
  water: "fire",
  grass: "water",
  electric: "water",
  ground: "electric",
  psychic: "fighting"
};

async function buscarPokemon(nome){

  const resposta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nome}`
  );

  if(!resposta.ok){
    throw new Error("Pokémon não encontrado");
  }

  return await resposta.json();
}

/* ANALISAR TIME */

async function analisarTime(){

  const nomes = [
    document.getElementById("poke1").value.toLowerCase(),
    document.getElementById("poke2").value.toLowerCase(),
    document.getElementById("poke3").value.toLowerCase()
  ];

  const resultado = document.getElementById("resultadoTime");

  resultado.innerHTML = "Carregando análise...";

  try{

    const pokemons = await Promise.all(
      nomes.map(nome => buscarPokemon(nome))
    );

    resultado.innerHTML = pokemons.map(pokemon => {

      const tipos = pokemon.types
        .map(t => t.type.name)
        .join(", ");

      const vantagem = pokemon.types
        .map(t => tiposFortes[t.type.name])
        .filter(Boolean)
        .join(", ");

      return `
        <div class="card-time">

          <img 
            src="${pokemon.sprites.other['official-artwork'].front_default}"
          >

          <h3>${pokemon.name}</h3>

          <p><b>Tipos:</b> ${tipos}</p>

          <div class="analise">

            <p>
              <b>Vantagem estratégica:</b>
              forte contra ${vantagem || "diversos tipos"}
            </p>

            <p>
              <b>Sugestão:</b>
              usar ataques do tipo ${pokemon.types[0].type.name}
            </p>

          </div>

        </div>
      `;

    }).join("");

  }catch(erro){

    resultado.innerHTML = `
      <div class="card-time">
        <h3>${erro.message}</h3>
      </div>
    `;
  }
}

/* POKEMON DO DIA */

async function pokemonDoDia(){

  const numero = Math.floor(Math.random() * 151) + 1;

  const pokemon = await buscarPokemon(numero);

  const card = document.getElementById("pokemonDia");

  card.innerHTML = `
    <div class="pokemon">

      <img 
        src="${pokemon.sprites.other['official-artwork'].front_default}"
      >

      <h2>
        #${pokemon.id} ${pokemon.name}
      </h2>

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
          <b>Tipos:</b>
          ${pokemon.types.map(
            t => t.type.name
          ).join(", ")}
        </p>

      </div>

    </div>
  `;
}