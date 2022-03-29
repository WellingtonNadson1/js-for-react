function FlipCard() {
    //This variable I used for logic of flip cards
    let $hasFlip = false;
    let $firstCard, $secondCard;

    // I used a DOM Object (window) for manipulatio the event onClick
    // Named especific the object for use only here
    window.versoFrontCardGame = {};
    window.versoFrontCardGame.handleClick = (event) =>{
        // I get the element clicked
        const $origin = event.target;
        
        const $versoFrontCardGame = $origin.closest('.verso-front-card-game');

        $versoFrontCardGame.classList.toggle('-active');

        // Logic about flip first and second card
        if (!$hasFlip) {
            $hasFlip = true;
            $firstCard = $versoFrontCardGame;
            
        } else {
            $hasFlip = false;
            $secondCard = $versoFrontCardGame;

            // Control about remove class respomsible flip card
            if ($firstCard.dataset.name != $secondCard.dataset.name) {
                setTimeout(() => {
                    $firstCard.classList.remove('-active');
                    $secondCard.classList.remove('-active');
                }, 1000);
            }
        }        
    };
}

export default FlipCard