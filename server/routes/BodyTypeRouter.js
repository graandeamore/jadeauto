const Router = require('express')
const router = new Router()
const BodyTypeController = require('../controllers/BodyTypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),BodyTypeController.create)
router.get('/',BodyTypeController.getAll)

module.exports = router