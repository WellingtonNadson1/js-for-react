import './style.css'

function PlayerScore(points = 0){

    return /*html*/`
        <article class="score" data-points="${points}">
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </article>
    `
};

export default PlayerScore;