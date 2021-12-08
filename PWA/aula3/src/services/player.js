const express = require('express')
const Players = require('./index')

let router = express()

router.use(express.json({limit:'100mb'}));
router.use(express.urlencoded({limit:'100mb', extended: true}));

router.route('/players')
.get((req, res) => {
  
  console.log('Get foi!')
})
.post((req, res, next) => {
  let body = req.body
  console.log(body)

  Players.create(body)
    .then(() => {
      console.log('gravei')
      res.status(200)
      res.send(body)
      next()
    })
    .catch(err => {
      console.log('já existe')
      err.status = err.status || 500
      res.status(401)
      next()
    })
})

module.exports = router