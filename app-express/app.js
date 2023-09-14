const express = require("express")
const User = require("./database/models/user")
const os = require('os');

const app = express()
app.use(express.json())

const syncDatabase = async() => {
  try {
    await User.sync({ alter: true })
    console.log("Data Base Sync With User")
    await User.destroy({ where: {} })
    await User.bulkCreate([
      { firstName: 'Smit', lastName: 'Pethani', email: 'Smit@example.com' },
      { firstName: 'Smit1', lastName: 'Pethani', email: 'Smit1@example.com' },
      { firstName: 'Smit2', lastName: 'Pethani', email: 'Smit2@example.com' },
      { firstName: 'Smit3', lastName: 'Pethani', email: 'Smit3@example.com' },
    ])
  } catch (error) {
    console.error(error)
  }
}

console.log('Express App Starting')
syncDatabase().then(() => {
  app.get('/users', async(req, res) => {
    console.log("Hello from Express")
    const data = await User.findAll({ raw:true })
    res.status(200).json({...data, host: os.hostname()})
  })
  
  app.listen(8080, () => {
    console.log(os.hostname())
    console.log('Express App Running on Port 8080')
  })
})
.catch((error) => {
  console.error(error)
})