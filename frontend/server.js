import express from "express";
import { ADDRESS } from "./public/scripts/config.js";

const app = express();

app.use(express.static("public"));

const PORT = 3221;
app.listen(PORT, "0.0.0.0", () => console.log(`Frontend Server ready on ${ADDRESS}:${PORT}`));