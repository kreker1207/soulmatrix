const Router = require('express')
const router = new Router()
const controller = require('./calculateController')

router.get('/org/:id',controller.calc);

module.exports = router;