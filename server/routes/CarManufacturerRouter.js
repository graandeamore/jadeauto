const Router = require('express')
const router = new Router()
const CarManufacturerController = require('../controllers/CarManufacturerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),CarManufacturerController.create)  //create cars Manufacturer
router.get('/',CarManufacturerController.getAll)           //get cars Manufacturer

module.exports = router