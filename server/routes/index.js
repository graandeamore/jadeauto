//main router
const Router = require('express') //import router from express
const router = new Router()  //create object from express-Router

    //import under-routers
const carRouter = require('./carRouter')
const userRouter = require('./userRouter')
const carManufacturerRouter = require('./carManufacturerRouter')
const bodyTypeRouter = require('./bodyTypeRouter')

    //under-routers
router.use('/user', userRouter) // router urls, router
router.use('/type', bodyTypeRouter)
router.use('/manufacturer', carManufacturerRouter)
router.use('/car', carRouter)

module.exports = router //export router