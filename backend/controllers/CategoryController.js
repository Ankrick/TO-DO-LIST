const mongoose = require('mongoose');
const Todo = require('../models/todo');
const User = require('../models/user');
const Category = require('../models/category');

const CategoryController = {
    index: async(req, res) => {
        try{
            let name = req.params.id
            const exisitingUser = await User.findOne({name});
            const category = await Category.find({User: exisitingUser});
            
            if(!category){
                res.status(404).json({msg : 'Empty List'})
            }
            res.status(200).json(category);
        }catch(err){
            console.log(err);
        }
    },
    create: async(req,res) => {
        try {
            const { category } = req.body
            let name = req.params.id
            const exisitingUser = await User.findOne({name});
            if (exisitingUser){
                let existingCategory = await Category.create({ category, User: exisitingUser});
                exisitingUser.Category.push(existingCategory);
                exisitingUser.save();
                res.status(200).json(existingCategory);
            }else{
                console.log('login first');
            }
        } catch(err) {
            console.log(err)
        }
    },
    deleteAll: async(req,res) => {
        try{
            let categories = await Category.find({});
            if(!categories.length){
                res.status(404).json({msg : 'No todos found currently'})
            }else {
                let category = await Category.deleteMany({});
                return res.status(200).json({category});
            }
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = CategoryController;