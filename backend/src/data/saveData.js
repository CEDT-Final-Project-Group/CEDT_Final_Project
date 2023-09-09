import fs from "fs";
import path from "path";

export const loadData = () => {
    let rawData = fs.readFileSync(path.resolve(path.resolve(), "./src/data/playersData.json"));
    return JSON.parse(rawData);
};

export const saveData = (data, file) => {
    const finished = (error) => {
        if (error) {
            console.error(error);
            return;
        }
    };
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(file, jsonData, finished);
};