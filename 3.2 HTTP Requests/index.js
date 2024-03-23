import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>555-555-5555<p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>I'm a dude, playing a dude, disguised as another dude.</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})