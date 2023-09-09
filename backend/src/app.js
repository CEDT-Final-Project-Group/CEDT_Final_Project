import express from "express";
import cors from "cors";
import { saveData, loadData } from "./data/saveData.js";

const app = express();

//body-parser
app.use(express.json());

//allow request from other origin (different port)
app.use(cors());

app.get("/scoreboard", (req, res) => {
    let data = loadData();
    res.status(200).json(data);
});

app.post("/scoreboard", (req, res) => {
    let data = loadData();
    const { username, score } = req.body;
    if (!username || !score)
        res.status(400).json({ message: "Incomplete Player's data" });
    else {
        const id = data[data.length - 1].id + 1;
        data.push({ id, username, score });
        saveData(data, './src/data/playersData.json');
        res.status(201).json({ message: `Data #${id}: Player ${username} with the score of ${score} has been saved` });
    }
});

app.delete("/scoreboard/:id", (req, res) => {
    let data = loadData();
    const { id } = req.params;
    let found = false;
    for (var i = 0; i < data.length; i++) if (data[i].id == id) {
        data.splice(i, 1);
        saveData(data, './src/data/playersData.json');
        res.status(200).json({ message: `Data #${id} has been deleted successfully` });
        found = true;
    }
    if (!id) res.status(400).json({ message: "Missing Data's id" });
    else if (!found) res.status(404).json({ message: `Data #${id} not found` });
})

export default app;