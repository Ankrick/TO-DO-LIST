const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);


const UserController = {
    index: async (req,res) => {
        try {
            const users = await User.find().sort({ createdAt: -1});
            return res.status(200).json(users);
        } catch (error) {
            res.status(404).json({error})
        }
    },
    register: async(req, res) => {
        try{
            const { email, name, pw } = req.body;
            let user = await User.create ({
                email,
                name,
                pw
            })
        res.status(200).json(user);
        }catch(err){
            console.log(err)
        }
    },
    login: async(req, res) => {
        try{
            const user = await User.findOne({ email: req.body.email});
            if(!user){
                res.status(400).json({msg : "sign up first"});
            }
            let hash = bcrypt.hashSync(req.body.pw, salt);
            let isPasswordCorrect = bcrypt.compareSync(user.pw, hash);    
            if (!isPasswordCorrect){
                res.status(400).json({ msg: "password is incorrect"});
            }
            const{pw, ...others} = user._doc;
            res.status(200).json({ others });

        }catch(err){
            console.log(err)
        }
    },
    destory: async(req, res) => {
        try{
            let id = req.params.id
            let user = await User.findById(id)
            if(!user){
                res.status(404).json({msg : 'User not found'})
            }else {
                let user = await User.findByIdAndDelete(id)
                return res.status(200).json({user});
            }
        }catch(err){
            console.log(err)
        }
    },
    destroyAll : async (req, res) => {
        try{
            let users = await User.find({});
            if(!users.length){
                res.status(404).json({msg : 'No users found currently'})
            }else {
                let user = await User.deleteMany({});
                return res.status(200).json({user});
            }
        }catch(err){
            console.log(err)
        }
    },
};

module.exports = UserController;