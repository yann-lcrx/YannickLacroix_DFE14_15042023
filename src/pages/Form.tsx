import { FC, FormEvent, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import DateSelector from "../components/Datepicker";
import { Dayjs } from "dayjs";
import Combobox from "../components/Combobox";
import { stateList } from "../utils/states";
import { departmentList } from "../utils/departments";

const Form: FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.firstName.value);
    console.log(event.currentTarget.lastName.value);
    console.log(birthDate);
    console.log(startDate);
    console.log(event.currentTarget.street.value);
    console.log(event.currentTarget.city.value);
    console.log(event.currentTarget.state.value);
    console.log(event.currentTarget.zipCode.value);
    console.log(event.currentTarget.department.value);
  };

  return (
    <>
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
          onChange={(value) => setBirthDate(value)}
        />

        <DateSelector
          value={startDate}
          label="Start Date"
          onChange={(value) => setStartDate(value)}
        />

        <fieldset>
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input name="street" id="street" required />

          <label htmlFor="city">City</label>
          <input name="city" id="city" required />

          <label htmlFor="state">State</label>
          <Combobox options={stateList} id="state" name="state" />

          <label htmlFor="zip-code">Zip Code</label>
          <input name="zipCode" id="zip-code" required type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Combobox options={departmentList} id="department" name="department" />

        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
