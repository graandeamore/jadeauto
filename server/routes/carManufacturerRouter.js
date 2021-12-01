const Router = require('express')
const router = new Router()
const carManufacturerController = require('../controllers/carManufacturerController')

router.post('/',carManufacturerController.create)  //create cars Manufacturer
router.get('/',carManufacturerController.getAll)           //get cars Manufacturer

module.exports = router