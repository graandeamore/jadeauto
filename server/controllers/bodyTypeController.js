const {BodyType} = require('../models/models')          //import body_type model by destructuring
const ApiError = require('../error/ApiError')

class BodyTypeController {
    async create(req,res){                                      //create bodyType
        const {name} = req.body                                  //extract name from json post request
        const type = await BodyType.create({name})          //async create manufacturer with {name} in db
        return res.json(type)                                       //return bodyType in json
    }
    async getAll(req,res){                         //get bodyTypes
        const types = await BodyType.findAll()          //find all bodyTypes
        return res.json(types)                              //return all bodyTypes in json
    }
}

module.exports = new BodyTypeController()