import { useEmployeesContext } from "../hooks/useEmployeesContext"

const EmployeeDetails = ({employee}) => {

    const { dispatch } = useEmployeesContext()

    const handleClick = async() => {
        const response = await fetch('/api/employees/' + employee._id , {
            method:'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_EMPLOYEE', payload: json})
        }
    }
    return (
        <div className="employee-details">
            <h4>{employee.name}</h4>
            <p><strong>Designation : </strong>{employee.designation}</p>
            <p><strong>Age : </strong>{employee.age}</p>
            <p><strong>Gender : </strong>{employee.gender}</p>
            <p><strong>Salary : </strong>{employee.salary}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default EmployeeDetails