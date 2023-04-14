import "./App.css";
import { Department, State } from "../types";
import DataTable from "./components/Table";
import { useModal, Modal } from "d2e-components";

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

  const { toggle, isShowing } = useModal();

  return (
    <div className="App">
      <div style={{ height: 250, width: "100%" }}>
        <button onClick={toggle}>Modale</button>
        <DataTable columns={columns} data={mockData} keyProperty="firstName" />
        <Modal isShowing={isShowing} hide={toggle} label="Modal">
          Fenêtre modale
        </Modal>
      </div>
    </div>
  );
}

export default App;
