import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    // const dummyData = [
    //     {
    //         "id": 1,
    //         "firstName": "Ramesh",
    //         "lastName": "padukone",
    //         "email": "Ramesh@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "Umesh",
    //         "lastName": "Dadoni",
    //         "email": "umesh@gmail.com"
    //     },
    //     {
    //         "id": 3,
    //         "firstName": "Getta",
    //         "lastName": "lavdi",
    //         "email": "geetah@gmail.com"
    //     }
    // ]

    //State var, function that updates state variable
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();


    //Api Calls
    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => { console.error(error); })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'> List Of Employees </h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th> Employee Id </th>
                        <th> First_Name </th>
                        <th> Last_Name </th>
                        <th> Email Id </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.email} </td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}> Update </button>
                                    <button className='btn btn-outline-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{ marginLeft: '10px' }}> Delete </button>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
