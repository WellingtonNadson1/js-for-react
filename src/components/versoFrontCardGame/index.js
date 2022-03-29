import CardGame from '../cardGame';
import FlipCard from './flipCard';
import './style.css';


function versoFrontCardGame(image, altImage, dataName){

    //Function respomsible flip cards
    FlipCard();

    return /*html*/`
        <article data-name="${dataName}" class="verso-front-card-game" onClick = "versoFrontCardGame.handleClick(event)">
            <div class="front-Card">
                ${CardGame()}
            </div>
            <div class="verso-Card">
                ${CardGame(image, altImage)}
            </div>
        </article>
    `
}

export default versoFrontCardGame;