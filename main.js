import './src/css/main.css'
import CardGame from './src/components/cardGame/index.js';
import PlayerScore from './src/components/playerScore/index.js';


const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();
const $htmlPlayerScore = PlayerScore();


$root.insertAdjacentHTML('beforeend', $htmlCardGame + $htmlCardGame);
$root.insertAdjacentHTML('afterbegin', $htmlPlayerScore);