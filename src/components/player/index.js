import './style.css'

function Player(player1, player2){

    return `
        <section class="players">
            <div class="player1">
                <h2>
                    ${player1}
                </h2>
            </div>
            <div class="player2">
                <h2>
                    ${player2}
                </h2>
            </div>            
        </section>
        
    `
};

export default Player;