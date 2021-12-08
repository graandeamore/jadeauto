const {CarName} = require('../models/models')          //import name db model by destructuring
const ApiError = require('../error/ApiError')           //import API errors

class NameController {
    async create(req,res){                                      //create car Name
        const {name} = req.body                                  //extract name of Name from json post request
        const name = await Name.create({name})                       //async create manufacturer with {name} in db
        return res.json(Name)                                       //return Name in json
    }
    async getAll(req,res){                         //get Name
        const car_names = await Name.findAll()          //find all names
        return res.json(Name)                              //return all Name in json
    }
}

module.exports = new NameController()