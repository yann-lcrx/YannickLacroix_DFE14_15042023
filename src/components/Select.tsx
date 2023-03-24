import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

function Combobox({ options, handleChange }: ComboboxProps) {
  const [value, setValue] = useState(options[0]);

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
    <Select value={value} onChange={(event) => setValue(event.target.value)}>
      {options.map((option) => (
        <MenuItem value={option} key={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}

interface ComboboxProps {
  options: string[];
  handleChange: (value: string) => void;
}

export default Combobox;
