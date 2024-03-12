import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { employeeApi } from "../../services/ApiServices";
import { useNavigate } from "react-router-dom";


const EmployeeList = () => {
    const [rowData, setRowData] = useState(null);
    const navigate = useNavigate()
  

    const [colDefs] = useState([
        {
            headerName: 'Employee ID',
            field: "employee_id",
            width: 100,
        },
        {
            headerName: 'Employee Name',
            field: "employee_name",
            width: 100,
        },
        {
            headerName: 'Birth Date',
            field: "birth_date",
            width: 100,
            //cellRenderer: renderState
        },
        {
            headerName: 'employee Status',
            field: "employee_status",
            //cellRenderer: renderCountry
        },
        {
            headerName: 'Joining Date',
            field: "joining_date",
            //cellRenderer: renderCountry
        },
        {
            headerName: 'Skills',
            field: "skills",
            //cellRenderer: renderCountry
        },
        {
            headerName: 'Salary Details',
            field: "salary_details",
            //cellRenderer: renderCountry
        }
    ]);

    const fetchEmployeeData = async () => {
        const result = await employeeApi('get', 'http://localhost:8080/api/employee/getEmployee')
        if (result) {
            setRowData(result.data);
        }
    }

    const redirectToCreate = async () => {
        navigate(`/CreateEmployee`)
    }

    useEffect(() => {
        fetchEmployeeData()
    }, []);

    const defaultColDef = useMemo(() => ({
        filter: true,
        editable: true,
    }));

    return (
        <>
            <div
                className={"ag-theme-quartz"}
                style={{ width: "100%", height: "800px" }}
            >
                <div>
                    <button onClick={redirectToCreate}>Create Employee</button>
                </div>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={5}
                    paginationPageSizeSelector={[5, 10, 15, 20]}
                    rowSelection="multiple"
                    onSelectionChanged={(event) => console.log("Row Selected!")}
                    onCellValueChanged={(event) =>
                        console.log(`New Cell Value: ${event.value}`)
                    }
                />
            </div>
        </>
    );
}
export default EmployeeList;
