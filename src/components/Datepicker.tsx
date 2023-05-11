import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

function DateSelector({
  value,
  label,
  onChange,
  maxDate,
  minDate,
  onError,
}: DateSelectorProps) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      label={label}
      maxDate={maxDate}
      minDate={minDate}
      onError={onError}
    />
  );
}

type DateSelectorProps = DatePickerProps<Dayjs>;

export default DateSelector;
