import { useEmployeesContext } from "../hooks/useEmployeesContext"
//
import { useState } from "react";
//

/*   
export const EmployeeEditDetails = ({employee}) => {
    const { dispatch } = useEmployeesContext()
    const [newEmployee, setNewEmployee] = useState(employee)

    const handleEditClick = async() => {
        const response = await fetch('/api/employees/' + newEmployee._id , {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_EMPLOYEE', payload: json})
        }
    }

    const handleChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    return (
        <div className="employee-details">
            <input type="text" name="name" value={newEmployee.name} onChange={handleChange} />
            <input type="text" name="designation" value={newEmployee.designation} onChange={handleChange} />
            <input type="number" name="age" value={newEmployee.age} onChange={handleChange} />
            <input type="text" name="gender" value={newEmployee.gender} onChange={handleChange} />
            <input type="number" name="salary" value={newEmployee.salary} onChange={handleChange} />
            <button onClick={handleEditClick}>Update</button>
        </div>
    )
}
*/ 



const EmployeeDetails = ({employee}) => {

    const { dispatch } = useEmployeesContext()

    /*
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
      name: employee.name,
      age: employee.age,
      gender: employee.gender,
      designation: employee.designation,
      salary: employee.salary,
    });
  
    const handleEditClick = () => {
      setEditing(true);
    };
  
    const handleFormChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`/api/employees/${employee._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const updatedEmployee = await response.json();
  
      if (response.ok) {
        dispatch({ type: "UPDATE_EMPLOYEE", payload: updatedEmployee });
      }
  
      setEditing(false);
    };
  
    const handleCancelClick = () => {
      setFormData({
        name: employee.name,
        age: employee.age,
        gender: employee.gender,
        designation: employee.designation,
        salary: employee.salary,
      });
      setEditing(false);
    };

    */

    /*
    const [newEmployee, setNewEmployee] = useState(employee)

    const handleEditClick = async() => {
        const response = await fetch('/api/employees/' + newEmployee._id , {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_EMPLOYEE', payload: json})
        }
    }

    const handleChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    return (
        <div className="employee-details">
            <input type="text" name="name" value={newEmployee.name} onChange={handleChange} />
            <input type="text" name="designation" value={newEmployee.designation} onChange={handleChange} />
            <input type="number" name="age" value={newEmployee.age} onChange={handleChange} />
            <input type="text" name="gender" value={newEmployee.gender} onChange={handleChange} />
            <input type="number" name="salary" value={newEmployee.salary} onChange={handleChange} />
            <button onClick={handleEditClick}>Update</button>
        </div>
    )


    */

    const handleClick = async() => {
        const response = await fetch('/api/employees/' + employee._id , {
            method:'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_EMPLOYEE', payload: json})
        }
    }


    //
    const [newEmployee, setNewEmployee] = useState(employee)
//

    const handleEditClick = async() => {
        const response = await fetch('/api/employees/' + employee._id , {
            method:'PATCH'
            /*headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)*/
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_EMPLOYEE', payload: json})
        }
    }
/*
    const handleChange = async(e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})

        const response = await fetch('/api/employees/' + employee._id , {
            method:'GET'})

        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'SET_SELECTED_EMPLOYEE', payload: json })
        }  

    }

    
*/
    /*return (
        <div className="employee-details">
            <input type="text" name="name" value={newEmployee.name} onChange={handleChange} />
            <input type="text" name="designation" value={newEmployee.designation} onChange={handleChange} />
            <input type="number" name="age" value={newEmployee.age} onChange={handleChange} />
            <input type="text" name="gender" value={newEmployee.gender} onChange={handleChange} />
            <input type="number" name="salary" value={newEmployee.salary} onChange={handleChange} />
            <button onClick={handleEditClick}>Update</button>
        </div>
    )
*/

    //

    const handleChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    

    return (
        <div className="employee-details">
            <h4>{employee.name}</h4>
            <p><strong>Name : </strong><input type="text" name="name" value={newEmployee.name} onChange={handleChange} /></p>
            <p><strong>Designation : </strong><input type="text" name="designation" value={newEmployee.designation} onChange={handleChange} /></p>
            <p><strong>Age : </strong><input type="number" name="age" value={newEmployee.age} onChange={handleChange} /></p>
            <p><strong>Gender : </strong><input type="text" name="gender" value={newEmployee.gender} onChange={handleChange} /></p>
            <p><strong>Salary : </strong><input type="number" name="salary" value={newEmployee.salary} onChange={handleChange} /></p>
            <span onClick={handleClick} >delete</span>
            <button type="submit" onClick={handleEditClick} >Update</button>
            
        </div>
    )
}

export default EmployeeDetails
