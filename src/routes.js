import React from "react";
import { Routes, Route } from "react-router-dom"
import DocumentUpload from "./Component/DocumentUpload";
import CreateEmployee from "./Component/CreateEmployee/CreateEmployee";
import EmployeeList from "./Component/EmployeeList/EmployeeList";

function Routers() {
    return (
        <Routes>
            <Route path={"/"} element={<DocumentUpload/>}/>
            <Route path={"/CreateEmployee"} element={<CreateEmployee/>}/>
            <Route path={"/list"} element={<EmployeeList/>}/>
        </Routes>
    )
}

export default Routers