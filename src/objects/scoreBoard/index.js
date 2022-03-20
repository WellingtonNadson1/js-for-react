import './style.css'
import Player from '../../components/player';
import VersusPlayerScore from '../../components/versusPlayerScore';

function ScoreBoard(){

    return /*html*/`
        <section class="players">
            <div class="player1">
                <h2>
                    ${Player("Player1")}
                </h2>
            </div>
            ${VersusPlayerScore()}
            <div class="player2">
                <h2>
                    ${Player("Player2")}
                </h2>
            </div>            
        </section>
        
    `
};

export default ScoreBoard;