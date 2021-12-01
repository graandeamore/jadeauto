const uuid = require('uuid')        //import unique ids
const path = require('path')        //import path
const {Car} = require('../models/models')
const ApiError = require('../error/ApiError')

class carController {
    async create(req,res,next){
        try{
            const {name, price, carManufacturerId, bodyTypeId, year, engine,drive,info} = req.body
            const {img} = req.files                             //request image
            let fileName = uuid.v4() + '.jpg'                        //generate unique filename
            img.mv(path.resolve(__dirname,'..', 'static',fileName))       //create url and adapt to OS
            const car = await Car.create( {name, price, carManufacturerId, bodyTypeId, year, engine, drive, img: fileName })       //create car with info
            return res.json(car)  //return json result
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){  //sorting
        let {carManufacturerId, bodyTypeId,limit,page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let cars;
        if (!carManufacturerId && !bodyTypeId){
            cars = await Car.findAndCountAll({limit, offset})
        }
        if (carManufacturerId && !bodyTypeId){
            cars = await Car.findAndCountAll({where: {carManufacturerId}, limit, offset})
        }
        if (!carManufacturerId && bodyTypeId){
            cars = await Car.findAndCountAll({where: {bodyTypeId}, limit, offset})
        }
        if (carManufacturerId && bodyTypeId){
            cars = await Car.findAndCountAll({where: {bodyTypeId,carManufacturerId}, limit, offset})
        }
        return res.json(cars)
    }

    async getOne(req,res){

    }
}

module.exports = new carController()