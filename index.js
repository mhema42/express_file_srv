import express from "express";
import fs from "fs/promises";

const app = express();
    
app.get("/", async (request, response) => {
    const filebuf = await fs.readFile("./files/index.html");
    response.type("html");
    response.send(filebuf);
});

app.get("/*", async (request, response) => {
    const fileName = request.path;
    console.log(fileName);
    const filebuf = await fs.readFile(`./files/${fileName}`);
    const type = fileName.split(".")[1];
    response.type(type); 
    response.send(filebuf);
});

app.listen(5080);