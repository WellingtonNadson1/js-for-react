import CardGame from '../../components/cardGame';
import './style.css'

//BoardGame is a object (structure)
//Function whith parametrs
function BoardGame(amount){
    //CardGame() is a imported component 
    const $htmlCardGame = CardGame();

    //Use method repeat for n cards prints
    const $htmlBoardGame = $htmlCardGame.repeat(amount);
    
    return `
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `
};

export default BoardGame