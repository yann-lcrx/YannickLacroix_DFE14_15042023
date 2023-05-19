import { TextField } from "@mui/material";
import { DateValidationError } from "@mui/x-date-pickers";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import styles from "../styles/components/Datepicker.module.css";
import { useEffect } from "react";

function DateSelector({
  value,
  label,
  onChange,
  maxDate,
  minDate,
  onError,
  error,
}: DateSelectorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const getErrorMessage = (error: DateValidationError) => {
    if (error === "maxDate") {
      return "Please select an earlier date";
    }

    if (error === "minDate") {
      return "Please select a later date";
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
  error?: DateValidationError;
};

export default DateSelector;
