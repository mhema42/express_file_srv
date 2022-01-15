import express from "express";
import fs from "fs/promises";

const app = express();
    
app.get("/", async (request, response) => {
    const filebuf = await fs.readFile("./files/index.html");
    response.type("html");
    response.send(filebuf);
});

app.get("/main.css", async (request, response) => {
    const filebuf = await fs.readFile("./files/main.css");
    response.type("css");
    response.send(filebuf);
});

app.listen(5080);