import './src/css/main.css'
// import versoCardGame from './src/components/versoCardGame/index.js';
import Player from './src/components/player/index.js';
import BoardGame from './src/objects/boardGame';

// Create const to print 'elements' in HTML
const $root = document.querySelector('#root');

//Creating elements in HTNL
$root.insertAdjacentHTML('beforeend', 
`
${Player("Player1", "Player2")}
${BoardGame(6)}
`);




//Flipper Card
const turn = document.querySelector('.card-game');

turn.addEventListener('click', 
function(){
    turn.classList.toggle('is-flipped');
})