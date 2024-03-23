import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
})

app.get("/contact", (req, res) => {
    res.send("555-555-5555");
})

app.get("/about", (req, res) => {
    res.send("I'm a dude, playing a dude, disguised as another dude.");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})