const {Manufacturer} = require('../models/models')          //import car_manufacturer db model by destructuring
const ApiError = require('../error/ApiError')                       //import API errors


class ManufacturerController {
    async create(req,res){                                                  //create manufacturer
        const {name} = req.body                                            //extract name from json post request
        const manufacturer = await Manufacturer.create({name})            //async create manufacturer with {name} in db
        return res.json(manufacturer)                                    //return created manufacturer in json
    }
    async getAll(req,res){
            const manufacturers = await Manufacturer.findAll()           //async extract all manufacturers from db
            return res.json(manufacturers)                              //return all manufacturers in json
    }
}

module.exports = new ManufacturerController()