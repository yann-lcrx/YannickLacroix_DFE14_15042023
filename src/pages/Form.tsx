import { FC, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DateSelector from "../components/Datepicker";
import dayjs, { Dayjs } from "dayjs";
import Combobox from "../components/Combobox";
import { stateList } from "../utils/states";
import { departmentList } from "../utils/departments";
import { Modal, useModal } from "d2e-components";
import EmployeesContext from "../contexts/employees";
import styles from "../styles/Form.module.css";

const Form: FC = () => {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs(new Date()));
  const [birthDate, setBirthDate] = useState<Dayjs>(dayjs(new Date()));

  const { isShowing, toggle } = useModal();

  const { employeesList, saveEmployees } = useContext(EmployeesContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveEmployees([
      ...employeesList,
      {
        firstName: event.currentTarget.firstName.value,
        lastName: event.currentTarget.lastName.value,
        birthDate,
        startDate,
        street: event.currentTarget.street.value,
        city: event.currentTarget.city.value,
        state: event.currentTarget.state.value,
        zipCode: event.currentTarget.zipCode.value,
        department: event.currentTarget.department.value,
      },
    ]);

    toggle();
  };

  return (
    <div className={styles.Form}>
      <h1>HRnet</h1>
      <Link to="employee-list">View Current Employees</Link>

      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input name="firstName" id="first-name" required />

        <label htmlFor="last-name">Last Name</label>
        <input name="lastName" id="last-name" required />

        <DateSelector
          value={birthDate}
          label="Birth Date"
          onChange={(value) => {
            if (value) {
              setBirthDate(value);
            }
          }}
        />

        <DateSelector
          value={startDate}
          label="Start Date"
          onChange={(value) => {
            if (value) {
              setStartDate(value);
            }
          }}
        />

        <fieldset>
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input name="street" id="street" required />

          <label htmlFor="city">City</label>
          <input name="city" id="city" required />

          <Combobox options={stateList} id="state" name="state" label="State" />

          <label htmlFor="zip-code">Zip Code</label>
          <input name="zipCode" id="zip-code" required type="number" />
        </fieldset>

        <Combobox
          options={departmentList}
          id="department"
          name="department"
          label="Department"
        />

        <button type="submit">Save</button>

        <Modal hide={toggle} isShowing={isShowing} label="sample">
          Employee created!
        </Modal>
      </form>
    </div>
  );
};

export default Form;
