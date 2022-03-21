import CardGame from '../cardGame';
import './style.css';


function versoFrontCardGame(){
    return /*html*/`
        <article class="verso-front-card-game">
            <div class="front-Card">
                ${CardGame()}
            </div>
            <div class="verso-Card">
                ${CardGame("logo-javascript.svg", "logo do Javascript", "verso")}
            </div>
        </article>
    `
}

export default versoFrontCardGame;