const mongoose = require('mongoose');
const User = require('../models/user');


const RecipeController = {
    index: async (req,res) => {
        try {
            const users = await User.find().sort({ createdAt: -1});
            return res.status(200).json(users);
        } catch (error) {
            console.log(error.message)
            res.status(500).send({ error: error.message })
        }
    },
    register: async(req, res) => {
        const { email, name, pw } = req.body;
        let user = await User.create ({
            email,
            name,
            pw
        })
        res.status(200).json(user);
    },
    login: async(req, res) => {
        try{

        }catch(err){

        }
    }
};

module.exports = RecipeController