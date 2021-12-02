//main router
const Router = require('express') //import router from express
const router = new Router()  //create object from express-Router

    //import under-routers
const carRouter = require('./CarRouter')
const userRouter = require('./UserRouter')
const carManufacturerRouter = require('./CarManufacturerRouter')
const bodyTypeRouter = require('./BodyTypeRouter')

    //under-routers
router.use('/user', userRouter) // router urls, router
router.use('/type', bodyTypeRouter)
router.use('/manufacturer', carManufacturerRouter)
router.use('/car', carRouter)

module.exports = router //export router