const Router = require('express')
const router = new Router()

const carRouter = require('./carRouter')
const manufacturerRouter = require('./manufacturerRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const errorHandler = require('../')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/manufacturer', manufacturerRouter)
router.use('/car', carRouter)

module.exports = router