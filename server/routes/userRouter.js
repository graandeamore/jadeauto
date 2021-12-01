const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

//router - controller
router.post('/registration', UserController.registration) //sign up
router.post('/login', UserController.login) //sign in
router.get('/auth', UserController.check )  //check auth status

module.exports = router