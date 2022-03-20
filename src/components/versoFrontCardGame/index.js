import CardGame from '../cardGame';
import './style.css';


function versoFrontCardGame(){
    return /*html*/`
        <article class="verso-front-card-game">
            ${CardGame()}
            ${CardGame("logo-javascript.svg", "logo do Javascript")}
        </article>
    `
}

export default versoFrontCardGame;