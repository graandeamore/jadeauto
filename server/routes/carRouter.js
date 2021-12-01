const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')

router.post('/',carController.create)  //create car
router.get('/',carController.getAll)        //get all cars
router.get('/:id',carController.getOne)     //get one car

module.exports = router