const express = require('express')
const router = express.Router()
const {
    addEmployee,
    getEmployee,
    getEmployees,
    deleteEmployee,
    updateEmployee

} = require('../controllers/employeeController')


//get all employees

router.get('/', getEmployees)

//get a single employee
router.get('/:id', getEmployee)

//add new employee
router.post('/add',addEmployee)

//delete an employee
router.delete('/:id',deleteEmployee)

//update an employee
router.patch('/:id',updateEmployee)





module.exports = router