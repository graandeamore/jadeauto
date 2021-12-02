const {BodyType} = require('../models/models')          //import body_type db model by destructuring
const ApiError = require('../error/ApiError')           //import API errors

class BodyTypeController {
    async create(req,res){                                      //create bodyType
        const {name} = req.body                                  //extract name from json post request
        const bodyType = await BodyType.create({name})          //async create manufacturer with {name} in db
        return res.json(bodyType)                                       //return bodyType in json
    }
    async getAll(req,res){                         //get bodyTypes
        const bodyTypes = await BodyType.findAll()          //find all bodyTypes
        return res.json(bodyTypes)                              //return all bodyTypes in json
    }
}

module.exports = new BodyTypeController()