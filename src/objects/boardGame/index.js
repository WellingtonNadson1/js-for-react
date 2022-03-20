import versoFrontCardGame from '../../components/versoFrontCardGame';
import './style.css'


function BoardGame(amount){
    //versoFrontCardGame() is a imported component 
    const $htmlversoFrontCardGame = versoFrontCardGame();

    //Use method repeat for n cards prints
    const $htmlBoardGame = $htmlversoFrontCardGame.repeat(amount);
    
    return /*html*/`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `
};

export default BoardGame