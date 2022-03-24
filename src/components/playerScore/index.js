import './style.css'

function PlayerScore(points = 0){

    return /*html*/`
        <article class="score" data-points="${points}">
            <ol>
                <li class="point"></li>
                <li class="point"></li>
                <li class="point"></li>
            </ol>
        </article>
    `
};

export default PlayerScore;