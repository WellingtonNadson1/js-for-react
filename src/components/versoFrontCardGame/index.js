import CardGame from '../cardGame';
import './style.css';


function versoFrontCardGame(){
    // I used a DOM Object (window) for manipulatio the event onClick
    // Named especific the object for use only here
    window.versoFrontCardGame = {};
    window.versoFrontCardGame.handleClick = (event) =>{
        // I get the element clicked
        const $origin = event.target;
        console.log($origin)

        const $versoFrontCardGame = $origin.closest('.verso-front-card-game');

        $versoFrontCardGame.classList.toggle('-active');

    };    

    return /*html*/`
        <article class="verso-front-card-game" onClick = "versoFrontCardGame.handleClick(event)">
            <div class="front-Card">
                ${CardGame()}
            </div>
            <div class="verso-Card">
                ${CardGame("logo-javascript.svg", "logo do Javascript")}
            </div>
        </article>
    `
}

export default versoFrontCardGame;