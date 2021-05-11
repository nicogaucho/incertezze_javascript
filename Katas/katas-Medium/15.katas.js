// two Pokemons, one winner. Create a function that returns the name of the winner in a fight between two Pokemons. Each Pokemons takes 2 turns attacking the other and whoever kills the other first is victorious. Death is defined as having "health <= 0". Each fighter will be a object/instance of "Pokemon". Both health and demagePerAttack will be integers larger then 0. You can mutate the "Pokemon" objects. 


// creacion de la instancia de object Pokemon con su propriedad
class Pokemon {
  constructor(name, health, demagePerAttack) {
    this.name = name;
    this.health = health;
    this.demagePerAttack = demagePerAttack;
  }  
  
  takeDamage(pokemon) {
    return this.health -= pokemon.demagePerAttack;
  }
  
  fainted() {
    this.health <= 0;
  }
}

function declareWinner(pokemon1, pokemon2) {
  // hai uno che attacca
  let whoAttacks = pokemon1;
  // hai uno difende 
  let whoDefend = pokemon2;
  // fintanto che chi difende ha vita, quello che attacca fa danno a chi difende e gli toglie vita 
  while ( !whoDefend.fainted() && !whoAttacks.fainted()) {
    whoDefend.takeDamage(whoAttacks)
    // se chi difende muore 
    if (whoDefend.fainted()) {
      // mostra il nome chi difende per capire chi ha vinto  
      return whoAttacks.name;
    }
    whoDefend.health = 0;
    // se gli resta ancora vita cioe non sta nella funzione di morte swappa chi attacca con chi divende 
    /* const temp = whoDefend;
    whoDefend = whoAttacks;
    whoAttacks = temp; */ 
    [ whoAttacks = whoDefend ] = [ whoDefend = whoAttacks];
  }
}

console.log(declareWinner(new Pokemon("Mew", 10, 2), new Pokemon("Pickachiu", 5, 4)));