import './style.css'


function CardGame(logo ="logo-shield.png", alt = "Shield Logo", cl = ""){
    return /*html*/`
        <article class="card-game${cl}">
            <img class="logo-card-game" src="./src/img/${logo}" alt=${alt}>
        </article>
    `
};

export default CardGame;