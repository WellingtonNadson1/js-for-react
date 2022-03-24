import './style.css'
import Player from '../../components/player';
import VersusPlayerScore from '../../components/versusPlayerScore';
import PlayerScore from '../../components/playerScore';
import ArrowSocre from '../../components/arrowScore';

function ScoreBoard(){

    return /*html*/`
        ${ArrowSocre()}
        <section class="players">
            <div class="player1">
                <h2>
                    ${Player("Player1")}
                </h2>
            </div>
            ${PlayerScore(2)}
            ${VersusPlayerScore()}
            ${PlayerScore(2)}
            <div class="player2">
                <h2>
                    ${Player("Player2")}
                </h2>
            </div>            
        </section>
        
    `
};

export default ScoreBoard;