async function loadScoreboard() {
    const data = await fetch("http://localhost:3222/scoreboard")
        .then(res => res.json());
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    for (const player of data) {
        const newRow = document.createElement("tr");
        const username = document.createElement("td");
        username.textContent = player.username;
        const score = document.createElement("td");
        score.textContent = player.score;
        newRow.appendChild(username);
        newRow.appendChild(score);
        itemList.appendChild(newRow);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const addItemButton = document.getElementById("get-scoreboard");
    addItemButton.addEventListener("click", loadScoreboard);
});