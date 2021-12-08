const express = require('express')

let router = require('./routes')
require('./database/connection')

const app = express()
app.use(router)

app.listen(3000, () => {
  console.log("Server started 🟢")
})
