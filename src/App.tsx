import { useState } from "react";
import "./styles/App.css";
import AppRouter from "./router";
import { HashRouter as Router } from "react-router-dom";
import { Employee } from "../types";
import EmployeesContext from "./contexts/employees";

function App() {
  const cachedEmployeesList = localStorage.getItem("employees-list");

  const [employeesList, setEmployeesList] = useState<Employee[]>(
    cachedEmployeesList ? JSON.parse(cachedEmployeesList) : []
  );

  const saveEmployees = (employees: Employee[]) => {
    setEmployeesList(employees);
    localStorage.setItem("employees-list", JSON.stringify(employees));
  };

  return (
    <div className="App">
      <EmployeesContext.Provider value={{ employeesList, saveEmployees }}>
        <Router>
          <AppRouter />
        </Router>
      </EmployeesContext.Provider>
    </div>
  );
}

export default App;
