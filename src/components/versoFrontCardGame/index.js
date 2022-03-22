import CardGame from '../cardGame';
import './style.css';


function versoFrontCardGame(){
    window.versoFrontCardGame = {};
    window.versoFrontCardGame.handleClick = (event) =>{
        const $origin = event.target;
        console.log($origin)
        const $versoFrontCardGame = $origin.closest('.verso-front-card-game');

        $versoFrontCardGame.classList.toggle('-active');
    }

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