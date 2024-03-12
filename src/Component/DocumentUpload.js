import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
//import { useSnackbar } from "notistack";
import './DocumentUpload.css'
import { employeeApi } from '../services/ApiServices'

const DocumentUpload = () => {

    const { register, handleSubmit } = useForm({})
    //const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const upload = async (data) => {
        let bodyFormData = new FormData();
        bodyFormData.append('file', data.file[0]);
        const result = await employeeApi('post', 'http://localhost:8080/api/employee/upload', bodyFormData)
        if (result) {
            // enqueueSnackbar('upload document successfully', { variant: 'success' });
            navigate(`/list`)
        } else {
            // enqueueSnackbar('Falied to upload document', { variant: 'error' });
            console.log('unable to upload file')
        }
    }

    return (
        <>
            <div className='container'>
             <form>
                <input type="file" name="file" {...register('file')} accept=".xlsx, .xls"></input>
                <div>
                    <button type="submit" onClick={handleSubmit(upload)} className='wrap'>Upload</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default DocumentUpload