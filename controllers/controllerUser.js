const { User } = require("../models/index");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require('../helpers/bcrypt')

class ControllerUser {
    static async login(req,res,next){

    }

    static async register(req,res,next){

    }

    static async socmedLogin(req,res,next){
        
    }
}

module.exports = ControllerUser