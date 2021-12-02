const {CarManufacturer} = require('../models/models')          //import car_manufacturer db model by destructuring
const ApiError = require('../error/ApiError')                       //import API errors


class CarManufacturerController {
    async create(req,res){                                                  //create manufacturer
        const {name} = req.body                                                 //extract name from json post request
        const carManufacturer = await CarManufacturer.create({name})          //async create manufacturer with {name} in db
        return res.json(carManufacturer)                                               //return created manufacturer in json
    }
    async getAll(req,res){
            const carManufacturers = await CarManufacturer.findAll()           //async extract all manufacturers from db
            return res.json(carManufacturers)                                      //return all manufacturers in json
    }
}

module.exports = new CarManufacturerController()