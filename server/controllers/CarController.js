const uuid = require('uuid')                            //import unique ids
const path = require('path')                              //import path
const {Car, CarInfo} = require('../models/models')          //import Car and car_info db models
const ApiError = require('../error/ApiError')                 //import API errors

class CarController {
    async create(req,res,next){                                 //create car
        try{
            let {name, price, carManufacturerId, bodyTypeId, year, engine, drive,mileage, info} = req.body          //request info about car

            const {img} = req.files                                                                 //request image
            let fileName = uuid.v4() + '.jpg'                                                           //generate unique filename
            img.mv(path.resolve(__dirname,'..', 'static',fileName))                                         //create url and adapt to O

            if (info){                      //if info (carInfo) consist in query
                info = JSON.parse(info)         //data from form-data - it comes in String, so parse it (to Front -> JSON, to Back -> JS Objects)
                info.forEach(i =>
                        CarInfo.create({
                            title: i.title,
                            description: i.description,
                            carId: car.id
                        })
                )
            }
            const car = await Car.create( {name, price, carManufacturerId, bodyTypeId, year, engine, drive, mileage, img: fileName })       //create car including info
            return res.json(car)                     //return json result
        } catch (e){
            next(ApiError.badRequest(e.message))        //if error trigger badRequest
        }
    }

    async getAll(req, res){                                          //get all and get filtered (by need) by manufacturer, body type
        let {carManufacturerId, bodyTypeId,limit,page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit                                 //skip limit cars on next page
        let cars;
        if (!carManufacturerId && !bodyTypeId){                                          //get all
            cars = await Car.findAndCountAll({limit, offset})   //for knowing total cars amount use findAndCountAll() instead of findAll() - for pagination
        }
        if (carManufacturerId && !bodyTypeId){                                          //filtering by manufacturer
            cars = await Car.findAndCountAll({where: {carManufacturerId}, limit, offset})
        }
        if (!carManufacturerId && bodyTypeId){                                          //filtering by body type
            cars = await Car.findAndCountAll({where: {bodyTypeId}, limit, offset})
        }
        if (carManufacturerId && bodyTypeId){                                           //filtering by body type and manufacturer
            cars = await Car.findAndCountAll({where: {bodyTypeId,carManufacturerId}, limit, offset})
        }
        return res.json(cars)
    }

    async getOne(req,res){                      //get a car by id
            const {id} = req.params
            const car = await Car.findOne(          //extract a car by id and get info
                {
                    where: {id},
                    include: [{model: CarInfo, as: 'info'}]
                }
        )
        return res.json(car)
    }
}

module.exports = new CarController()