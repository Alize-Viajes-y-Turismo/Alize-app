const express = require("express")

const app = express()
app.post("/login", (req, res) => {
    res.status(200).json({ mensaje: 'Operación exitosa'});
})
app.listen(4000)