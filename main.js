import './src/css/main.css'
import BoardGame from './src/objects/boardGame';
import ScoreBoard from './src/objects/scoreBoard';

// Create const to print 'elements' in HTML
const $root = document.querySelector('#root');

//Creating elements in HTNL
$root.insertAdjacentHTML('beforeend', 
`
${ScoreBoard()}
${BoardGame(6)}

`);




//Flipper Card
const turn = document.querySelector('.verso-front-card-game');
console.log(turn);

    turn.addEventListener('click', 
    function(){
        
            
        
        turn.classList.toggle('-active');
    });