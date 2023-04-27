import { createContext } from "react";
import { Employee } from "../../types";

const baseContextValue: {
  employeesList: Employee[];
  saveEmployees: (employeesList: Employee[]) => void;
} = { employeesList: [], saveEmployees: () => null };

const EmployeesContext = createContext(baseContextValue);

export default EmployeesContext;
