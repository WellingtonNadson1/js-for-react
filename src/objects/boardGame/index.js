import versoFrontCardGame from '../../components/versoFrontCardGame';
import cards from './arraycard';
import './style.css'


function BoardGame(amount){

    //versoFrontCardGame() is a imported component 
    const htmlCardList = cards.map((card) => versoFrontCardGame(card.image, card.altImage));
    console.log(htmlCardList);

    const $htmlCards = htmlCardList.join('');
    console.log($htmlCards);
    

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `
};

export default BoardGame