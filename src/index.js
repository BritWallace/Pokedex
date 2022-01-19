import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { PokemonName, PokemonSpecies } from './pokemon-service.js'


function clearFields() {
    $('#pokemon').val("");
    $('.showErrors').text("");
    $('.showName').text("");
    $('.showImg').text("");
    $('.showAbilities').text("");
    $('.showMoves').text("");
    $('.showTypes').text("");
   $('.showEggs').text(""); 
   $('.showHabitat').text("");
   $('.showFlavorText').text("");
  }
  
  function getInfo(response, species) {
    if (response.forms) {
      $('.showName').text(`Name: ${response.forms[0].name}`);
      $('.showImg').html(`<img src=${response.sprites.other.dream_world.front_default}>`);
      $('.showAbilities').text(`Abilities: ${getAbilities(response.abilities)}`);
      $('.showMoves').text(`Moves: ${getMoves(response.moves)}`);
      $('.showTypes').text(`Types: ${getTypes(response.types)}`);
     $('.showEggs').text(`Egg Group: ${getEggs(species.egg_groups)}`); 
     $('.showHabitat').text(`Habitat: ${species.habitat.name}`);
     $('.showFlavorText').text(`Prof. Oak Says: ${species.flavor_text_entries[1].flavor_text}`);
      } else {
      $('.showErrors').text(`There was an error: ${response}`);
    }
  }

 function getMoves(movesArray){
   let moves = "";
   for (let i = 0; i <movesArray.length; i++){
     moves += movesArray[i].move.name + ", ";
   }
   return moves
  }

  function getTypes(typesArray) {
    let types = "";
    for (let i = 0; i <typesArray.length; i++){
     types += typesArray[i].type.name + ", ";
    }
    return types
  }

  function getAbilities(abilitiesArray) {
    let ability = "";
    for (let i = 0; i <abilitiesArray.length; i++){
     ability += abilitiesArray[i].ability.name + ", ";
    }
    return ability
  }

  function getEggs(eggsArray) {
    let eggs = "";
    for (let i = 0; i <eggsArray.length; i++){
     eggs += eggsArray[i].name + ", ";
    }
    console.log(eggs)
    return eggs
  }
  
  async function makeApiCall(name) {
    const response = await PokemonName.getPokemon(name);
    const species = await PokemonSpecies.getSpecies(name);
    getInfo(response, species);
  }
  
  $(document).ready(function() {
    $('#pokemonID').click(function() {
      let pokemon = $('#pokemonNum').val();
      clearFields();
      makeApiCall(pokemon);
    });
  });




