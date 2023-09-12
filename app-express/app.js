const express = require("express")
const User = require("./database/models/user")

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
  console.log("Hello from Express")
  res.status(200).json(User.findAll({ raw:true }))
})

app.listen(8080, () => {
  console.log('Express App Running on Port 8080')
})