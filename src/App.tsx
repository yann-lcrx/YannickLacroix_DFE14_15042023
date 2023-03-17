import "./App.css";
import { Department, State } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import DataTable from "./components/Table";

function App() {
  const mockData = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: new Date(),
      department: Department.ENG,
      birthDate: new Date(),
      street: "streetname",
      city: "Cheyenne",
      state: State.WY,
      zipCode: 99,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      startDate: new Date(),
      department: Department.LGL,
      birthDate: new Date(),

      street: "blvdname",
      city: "Green Bay",
      state: State.WI,
      zipCode: 92,
    },
  ];

  const columns = [
    {
      field: "firstName",
    },
    {
      field: "lastName",
    },
    {
      field: "startDate",
    },
    {
      field: "department",
    },
    {
      field: "birthDate",
    },
    {
      field: "street",
    },
    {
      field: "city",
    },
    {
      field: "state",
    },
    {
      field: "zipCode",
    },
  ];

  return (
    <div className="App">
      <div style={{ height: 250, width: "100%" }}>
        <DataTable columns={columns} data={mockData} keyProperty="firstName" />
      </div>
    </div>
  );
}

export default App;
