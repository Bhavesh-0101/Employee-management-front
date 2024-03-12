import React from "react";
import { useForm } from "react-hook-form"
import './CreateEmployee.css'
import { useNavigate } from "react-router-dom";
import { employeeApi } from "../../services/ApiServices";


const CreateEmployee = () => {
    const { register, handleSubmit } = useForm({})
    const navigate = useNavigate()

   
    const CreateEmployee = async (data) => {
        const result = await employeeApi('post', 'http://localhost:8080/api/employee/create', data)
        if (result) {
            navigate(`/list`)
        } else {
            console.log('Unable to create employee');
        }
    }


    return (
        <>
            <div className='container'>
                <h1>
                    Create Employee
                </h1>
                <form onSubmit={handleSubmit(CreateEmployee)}>
                    <div>
                        <label>Emplyee Name</label>
                        <input
                            type='text'
                            name='employee_name'
                            {...register('employee_name')}
                        />
                    </div>
                    <div>
                        <label>Birth Date</label>
                        <input
                            name="birth_date"
                            type="text"
                            {...register('birth_date')}
                        />
                    </div>

                    <div>
                        <label>Employee Status</label>
                        <input
                            type='text'
                            name='employee_status'
                            {...register('employee_status')}
                        />
                    </div>
                    <div>
                        <label>Joining Date</label>
                        <input
                            type='text'
                            name='joining_date'
                            {...register('joining_date')}
                        />
                    </div>
                    <div>
                        <label>Skills</label>
                        <input
                            type='text'
                            name='skills'
                            {...register('skills')}
                        />
                    </div>
                    <div>
                        <label>Salary Details</label>
                        <input
                            type='text'
                            name='salary_details'
                            {...register('salary_details')}
                        />
                    </div>
                    <div>
                        <button type="submit" className='wrap'>Create Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateEmployee