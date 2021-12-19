const uuid = require('uuid')                            //import unique ids
const path = require('path')                              //import path
const {Car, CarInfo} = require('../models/models')          //import Car and car_info db models
const ApiError = require('../error/ApiError')                 //import API errors

class CarController {
    async create(req,res,next){                                 //create car
        try{
            let {nameName, manufacturerName, price, manufacturerId, carNameId, year, motor, drive, mileage, city, date, description} = req.body          //request info about car

            const {img,img1,img2,img3,img4,img5,img6,img7,img8} = req.files                                                                 //request image
            for (let i = 0; i < req.files; i++){
                let name = 'img' + 1
                let fileName = uuid.v4() + '.jpg'                                                           //generate unique filename
                img.mv(path.resolve(__dirname,'..', 'static',fileName))                                         //create url and adapt to O
            }


            const car = await Car.create( {nameName, manufacturerName, price,  manufacturerId, carNameId, year, motor , drive, mileage, city, date, description, img: fileName })       //create car including info
            return res.json(car)                        //return json result
        } catch (e){
            next(ApiError.badRequest(e.message))        //if error trigger badRequest
        }
    }

    async getAll(req, res){                                          //get all and get filtered (by need) by manufacturer, body type
        let {manufacturerId, carNameId,limit,page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit                                 //skip limit cars on next page
        let cars;
        if (!manufacturerId && !carNameId){                                          //get all
            cars = await Car.findAndCountAll({limit, offset})                           //for knowing total cars amount use findAndCountAll() instead of findAll() - for pagination
        }
        if (manufacturerId && !carNameId){                                                          //filtering by manufacturer
            cars = await Car.findAndCountAll({where: {manufacturerId}, limit, offset})
        }
        if (!manufacturerId && carNameId){                                          //filtering by car name
            cars = await Car.findAndCountAll({where: {carNameId}, limit, offset})
        }
        if (manufacturerId && carNameId){                                           //filtering by car name and manufacturer
            cars = await Car.findAndCountAll({where: {carNameId,manufacturerId}, limit, offset})
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