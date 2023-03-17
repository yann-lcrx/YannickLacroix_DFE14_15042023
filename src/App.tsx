import "./App.css";
import DataTable, { Column } from "./components/Table";
import { Department, Employee, State } from "../types";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const mockData: Employee[] = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: new Date(),
      department: Department.ENG,
      birthDate: new Date(),
      address: {
        street: "streetname",
        city: "Cheyenne",
        state: State.WY,
        zipCode: 99,
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      startDate: new Date(),
      department: Department.LGL,
      birthDate: new Date(),
      address: {
        street: "blvdname",
        city: "Green Bay",
        state: State.WI,
        zipCode: 92,
      },
    },
  ];

  const columns: Column<Employee>[] = [
    {
      label: "First Name",
      propertyName: "firstName",
      renderer: (data) => data.firstName,
    },
    {
      label: "Last Name",
      propertyName: "lastName",
      renderer: (data) => data.lastName,
    },
    {
      label: "Start Date",
      propertyName: "startDate",
      renderer: (data) => data.startDate.toLocaleDateString(),
    },
    {
      label: "Department",
      propertyName: "department",
      renderer: (data) => data.department,
    },
    {
      label: "Date of Birth",
      propertyName: "birthdate",
      renderer: (data) => data.birthDate.toLocaleDateString(),
    },
    {
      label: "Street",
      propertyName: "street",
      renderer: (data) => data.address.street,
    },
    {
      label: "City",
      propertyName: "city",
      renderer: (data) => data.address.city,
    },
    {
      label: "State",
      propertyName: "state",
      renderer: (data) => data.address.state,
    },
    {
      label: "Zip Code",
      propertyName: "zip code",
      renderer: (data) => data.address.zipCode,
    },
  ];

  return (
    <div className="App">
      <DataTable<Employee> columns={columns} data={mockData} />
      <DataGrid
        columns={[{ field: "name" }]}
        rows={[{ id: "0", name: "foo" }]}
      />
    </div>
  );
}

export default App;
