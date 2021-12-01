const {CarManufacturer} = require('../models/models')
const ApiError = require('../error/ApiError')

class carManufacturerController {
    async create(req,res){                                                  //create manufacturer
        const {name} = req.body                                                 //extract name from json post request
        const manufacturer = await CarManufacturer.create({name})          //async create manufacturer with {name} in db
        return res.json(manufacturer)                                               //return created manufacturer in json
    }
    async getAll(req,res){
            const manufacturers = await CarManufacturer.findAll()           //async extract all manufacturers from db
            return res.json(manufacturers)                                      //return all manufacturers in json
    }
}

module.exports = new carManufacturerController()