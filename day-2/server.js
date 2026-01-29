const express = require("express")

const app = express()

app.get("/about", (req, res) => {
  res.send("this is the about page")
})

app.listen(3000)