import './src/css/main.css'
import BoardGame from './src/objects/boardGame';
import ScoreBoard from './src/objects/scoreBoard';


// Create const to print 'elements' in HTML
const $root = document.querySelector('#root');

//Creating elements in HTNL
$root.insertAdjacentHTML('beforeend', 
`
${ScoreBoard()}
${BoardGame(4)}

`);