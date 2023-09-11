const express = require("express")

const app = express()

app.get('/hello', (req, res) => {
  console.log("Hello from Express")
  res.status(200).json({
    id: 1,
    name: 'smit'
  })
})

app.listen(8080, () => {
  console.log('Express App Running on Port 8080')
})