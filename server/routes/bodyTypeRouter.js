const Router = require('express')
const router = new Router()
const bodyTypeController = require('../controllers/bodyTypeController')

router.post('/',bodyTypeController.create)
router.get('/',bodyTypeController.getAll)

module.exports = router