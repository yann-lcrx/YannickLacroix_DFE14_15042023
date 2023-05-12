import { TextField } from "@mui/material";
import { DateValidationError } from "@mui/x-date-pickers";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import styles from "../styles/components/Datepicker.module.css";

function DateSelector({
  value,
  label,
  onChange,
  maxDate,
  minDate,
  onError,
  error,
}: DateSelectorProps) {
  const getErrorMessage = (error: DateError) => {
    if (error === "maxDate") {
      return "Please select an earlier date";
    }

    if (error === "minDate") {
      return "Please select a later date";
    }

    if (error === "incompleteDate") {
      return "Please enter a complete date (MM-DD-YYYY)";
    }
  };

  return (
    <div className={styles.Datepicker}>
      <DatePicker
        value={value}
        onChange={onChange}
        label={label}
        maxDate={maxDate}
        minDate={minDate}
        onError={onError}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            required: true,
          },
        }}
      />
      <p>{error ? getErrorMessage(error) : ""}</p>
    </div>
  );
}

type DateSelectorProps = DatePickerProps<Dayjs> & {
  error?: DateError;
};

export type DateError = DateValidationError | "incompleteDate";

export default DateSelector;
