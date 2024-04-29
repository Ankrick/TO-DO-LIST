const mongoose = require('mongoose');
const Todo = require('../models/todo');
const User = require('../models/user');
const todo = require('../models/todo');

const TodoController = {
    index: async(req,res) => {
        try{
            let name = req.params.id
            const exisitingUser = await User.findOne({name});
            const todos = await Todo.find({user: exisitingUser});
            
            if(!todos){
                res.status(404).json({msg : 'Empty Todos List'})
            }
            res.status(200).json(todos);
        } catch(err){
            console.log(err);
        }
    },
    create: async(req,res) => {
        try {
            const { title, body } = req.body
            let name = req.params.id
            const exisitingUser = await User.findOne({name});
            if (exisitingUser){
                let todo = await Todo.create({ title, body, user: exisitingUser});
                exisitingUser.Todo.push(todo);
                exisitingUser.save();
                res.status(200).json(todo);
            }else{
                console.log('user does not exist');
            }
        } catch(err) {
            console.log(err)
        }
    },
    ReadOne: async(req,res) => {
        try{
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({msg : 'Bad request'})
            }
            const todo = await Todo.findOne({ _id: id });
            if(!todo){
                return res.status(404).json({msg: 'todo is not found'})
            }
            res.status(200).json(todo);
        } catch(err){
            console.log(err);
        }
    },
    update: async(req,res) => {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({msg : 'Bad request'})
        }
        let todo = await Todo.findByIdAndUpdate(id, {...req.body})
        let UpdatedTodos = await Todo.findById(id)
        if(!todo){
            return res.status(404).json({msg: 'todo is not found'})
        }
        return res.status(200).json({UpdatedTodos});
    },
    delete: async(req,res) => {
        let id = req.params.id;
        const email = req.body.email;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({msg : 'Bad request'})
        }
        let todo = await Todo.findByIdAndDelete(id)
        let UpdatedTodo = await Todo.findById(id)
        let exisitingUser = await User.findOneAndUpdate({ email }, { $pull: { Todo: id } })
        if(!todo){
            return res.status(404).json({msg: 'todo is not found'})
        }
        res.status(200).json({ msg: "Todo Deleted" })
    },
    deleteAll: async(req,res) => {
        try{
            let todos = await Todo.find({});
            if(!todos.length){
                res.status(404).json({msg : 'No todos found currently'})
            }else {
                let todos = await Todo.deleteMany({});
                return res.status(200).json({todos});
            }
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = TodoController;