import versoFrontCardGame from '../../components/versoFrontCardGame';
import cards from './arraycard';
import './style.css'


function BoardGame(){

    //versoFrontCardGame() is a imported component 
    //Traverse the array 'cards' with method map, for create the new card with image
    const htmlCardList = cards
    .map((card) => versoFrontCardGame(card.image, card.altImage));

    //Algoritmo Fisher-Yates For shuffle the Cards
    function fisherYatesShuffle(arr){
        // loop in the all elements of array
        for (let i = arr.length-1; i > 0; i--){
            // random in the current array for creat new array
            const j = Math.floor(Math.random() * (i + 1));
            
            //assignment elements of new array by destruction
            [arr[i], arr[j]] = [arr[j], arr[i]];

            return arr;
        }
    }

    const shuffle = fisherYatesShuffle(htmlCardList);

    const $htmlCards = shuffle.join('');
    

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `
};

export default BoardGame