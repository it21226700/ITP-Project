import { useState } from "react"
import { useEmployeesContext } from "../hooks/useEmployeesContext"

const EmployeeForm = () => {
    const { dispatch } = useEmployeesContext()
    const [name,setName] = useState('')
    const [designation,setDesignation] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const [salary,setSalary] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const employee = {name,designation,age,gender,salary}

        const response = await fetch('/api/employees/add', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setName('')
            setDesignation('')
            setAge('')
            setGender('')
            setSalary('')
            console.log('new employee added:', json)
            dispatch({type: 'CREATE_EMPLOYEE',payload:json})
        }
    }
    
    return (
     
     
     <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Employee</h3>
  
        <label>Employee Name:</label>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
  
        <label>Designation:</label>
        <input 
          type="text" 
          onChange={(e) => setDesignation(e.target.value)} 
          value={designation}
        />
  
        <label>Age:</label>
        <input 
          type="number" 
          onChange={(e) => setAge(e.target.value)} 
          value={age} 
        />
        
        <label>Gender:</label>
        <input 
          type="text" 
          onChange={(e) => setGender(e.target.value)} 
          value={gender}
        />

        <label>Salary:</label>
        <input 
          type="number" 
          onChange={(e) => setSalary(e.target.value)} 
          value={salary} 
        />
  
        <button>Add Employee</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}

export default EmployeeForm