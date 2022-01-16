import e from "express";
import express from "express";
import fs from "fs/promises";

const app = express();
    
app.get("/", async (request, response) => {
    const filebuf = await fs.readFile("./files/index.html");
    response.type("html");
    response.send(filebuf);
});

app.get("/:name", async (request, response) => {
    const name = request.params.name;
    const filebuf = await fs.readFile("./files/index.html");
    const content = filebuf.toString().replace("World", name);
    response.type("html");
    response.send(content);
});

app.get("/*", async (request, response) => {
    try {
        const fileName = request.path;
        console.log(fileName);
        const filebuf = await fs.readFile(`./files/${fileName}`);
        const type = fileName.split(".")[1];
        response.type(type); 
        response.send(filebuf);
    } catch (err) {
        response.status(404).end();
    }
});

// using express we can get the same result (and more) with this code
// app.use(express.static("./files"));

app.listen(5080);