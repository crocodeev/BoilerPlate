import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Hello world")
})

const Port = 3000;

app.listen(Port, () => {
    console.log("Listen on 3000 port ", Port);
})
