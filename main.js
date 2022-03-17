import './src/css/main.css'
// import versoCardGame from './src/components/versoCardGame/index.js';
import PlayerScore from './src/components/playerScore/index.js';
import BoardGame from './src/objects/boardGame';

// Create const to print 'elements' in HTML
const $root = document.querySelector('#root');
const $htmlPlayerScore = PlayerScore("Player1");
const $htmlBoardGame = BoardGame(6);


//Creating elements in HTNL
$root.insertAdjacentHTML('afterbegin', $htmlPlayerScore);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);




//Flipper Card
const turn = document.querySelector('.card-game');

turn.addEventListener('click', 
function(){
    turn.classList.toggle('is-flipped');
})