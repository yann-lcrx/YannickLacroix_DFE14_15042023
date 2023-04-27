import { FC, useContext } from "react";
import EmployeesContext from "../contexts/employees";
import DataTable from "../components/Table";
import { GridColDef } from "@mui/x-data-grid";

const List: FC = () => {
  const { employeesList } = useContext(EmployeesContext);

  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "startDate", headerName: "Start Date", width: 130 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "birthDate", headerName: "Birth Date", width: 130 },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "state", headerName: "State", width: 130 },
    { field: "zipCode", headerName: "Zip Code", width: 130 },
  ];

  return (
    <DataTable data={employeesList} columns={columns} keyProperty="lastName" />
  );
};

export default List;
