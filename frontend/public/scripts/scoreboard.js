import { BACKEND_URL } from "./config.js";

export async function loadScoreboard() {
    const data = await fetch(`${BACKEND_URL}/scoreboard`).then((res) =>
        res.json()
    );
    data.sort(function (a, b) {
        return b.score - a.score;
    });
    const ranks = document.getElementById("rank-left");
    const names = document.getElementById("name-middle");
    const scores = document.getElementById("score-right");
    ranks.innerHTML = "";
    names.innerHTML = "";
    scores.innerHTML = "";
    let i = 0
    for (const player of data) {
        const playerRank = document.createElement("p");
        playerRank.innerHTML = ++i + ".";
        const playerName = document.createElement("p");
        playerName.innerHTML = player.username;
        const playerScore = document.createElement("p");
        playerScore.innerHTML = player.score;

        ranks.appendChild(playerRank);
        names.appendChild(playerName);
        scores.appendChild(playerScore);
        if (i == 10) break;
    }
};

export async function addScoreboard(item) {
    await fetch(`${BACKEND_URL}/scoreboard`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}