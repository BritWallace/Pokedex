
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import PokemonName from './pokemon-service.js'


function clearFields() {
    $('#pokemon').val("");
    $('.showErrors').text("");
    $('.showName').text("");
    $('.showImg').text("");
  }
  
  function getInfo(response) {
    if (response.forms) {
      $('.showName').text(`${response.forms[0].name}`);
      $('.showImg').html(`<img src=${response.sprites.other.dream_world.front_default}>`);
      // $('.showHabitat').text(`${response.}`)
      } else {
      $('.showErrors').text(`There was an error: ${response}`);
    }
  }
  
  async function makeApiCall(number) {
    const response = await PokemonName.getPokemon(number);
    getInfo(response);
  }
  
  $(document).ready(function() {
    $('#pokemonID').click(function() {
      // let all = [];
      // for(i=1;i<897;i++) {
      //   all.push(i);
      // }
      // if($('#pokemonNum').val()>0) {
      //   let pokemon = $('#pokemonNum').val();
      //   clearFields();
      //   makeApiCall(pokemon);
      // } else {
      //   if($('#habitat').val()===null) {
      //     habitat = all;
      //   } else {
      //     habitat = $('#habitat').val();
          
      //   }
      // }
    });
  });

