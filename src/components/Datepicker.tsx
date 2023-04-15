import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

function DateSelector({ value, label, onChange }: DateSelectorProps) {
  const currentDate = dayjs().startOf("day");

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      label={label}
      maxDate={currentDate}
    />
  );
}

type DateSelectorProps = DatePickerProps<Dayjs>;

export default DateSelector;
