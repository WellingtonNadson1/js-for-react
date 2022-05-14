import './style.css'


function CardGame(logo ="images/logo-shield.svg", alt = "Shield Logo", cl = ""){
    return /*html*/`
        <article class="card-game${cl}">
            <img class="logo-card-game" src="${logo}" alt="${alt}">
        </article>
    `
};

export default CardGame;