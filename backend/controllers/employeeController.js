const Emp = require('../models/employee')
const mongoose = require('mongoose')


//get all employees
const getEmployees = async (req,res) => {
    const employees = await Emp.find({})

    res.status(200).json(employees)
}




//get a single employee
const getEmployee = async (req,res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No such employee'})
    }

    const employee = await Emp.findById(id)

    if (!employee){
        return res.status(400).json({error : "No such employee"})
    }

    res.status(200).json(employee)
}






//add new employee

const addEmployee = async (req,res) => {
    const {name,designation,age,gender,salary} = req.body
    
    //add document to database
    try{
        const employee = await Emp.create({name,designation,age,gender,salary})
        res.status(200).json(employee)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//delete an employee
const deleteEmployee = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No such employee'})
    }

    const employee = await Emp.findOneAndDelete({_id: id})

    if (!employee){
        return res.status(400).json({error : "No such employee"})
    }

    res.status(200).json(employee)
}

//update an employee
const updateEmployee = async (req,res) => {

    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No such employee'})
    }

    const employee = await Emp.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!employee){
        return res.status(400).json({error : "No such employee"})
    }
    res.status(200).json(employee)
}




module.exports = {
    getEmployees,
    getEmployee,
    addEmployee,
    deleteEmployee,
    updateEmployee 
}