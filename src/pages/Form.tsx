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
import Input from "../components/Input";
import { DateValidationError } from "@mui/x-date-pickers";

const Form: FC = () => {
  const currentDate = dayjs().startOf("day");

  const [startDate, setStartDate] = useState<Dayjs>(dayjs(new Date()));
  const [birthDate, setBirthDate] = useState<Dayjs>(dayjs(new Date()));
  const [birthDateError, setBirthDateError] =
    useState<DateValidationError | null>(null);
  const [startDateError, setStartDateError] =
    useState<DateValidationError | null>(null);

  const { isShowing, toggle } = useModal();

  const { employeesList, saveEmployees } = useContext(EmployeesContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (birthDate.isValid() && startDate.isValid()) {
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
    }
  };

  return (
    <main className={styles.Form}>
      <h1>HRnet</h1>
      <Link to="employee-list">View Current Employees</Link>

      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit}>
        <Input name="firstName" label="First name" />

        <Input name="lastName" label="Last name" />

        <div className={styles.dateContainer}>
          <DateSelector
            value={birthDate}
            label="Birth Date"
            onChange={(value) => {
              if (value) {
                setBirthDate(value);
              }
            }}
            maxDate={currentDate}
            onError={(error) => {
              setBirthDateError(error);
            }}
            error={birthDateError}
          />
        </div>

        <DateSelector
          value={startDate}
          label="Start Date"
          onChange={(value) => {
            if (value) {
              setStartDate(value);
            }
          }}
          minDate={birthDate}
          onError={(error) => {
            setStartDateError(error);
          }}
          error={startDateError}
        />

        <fieldset>
          <legend>Address</legend>

          <Input name="street" label="Street" />

          <Input name="city" label="City" />

          <Combobox options={stateList} id="state" name="state" label="State" />

          <Input name="zipCode" label="Zip code" type="number" />
        </fieldset>

        <Combobox
          options={departmentList}
          id="department"
          name="department"
          label="Department"
        />

        <button type="submit" disabled={!!startDateError || !!birthDateError}>
          Save
        </button>

        <Modal hide={toggle} isShowing={isShowing} label="sample">
          Employee created!
        </Modal>
      </form>
    </main>
  );
};

export default Form;
