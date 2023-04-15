import { MenuItem, Select } from "@mui/material";

function Combobox({ options, id, name }: ComboboxProps) {
  return (
    <Select id={id} name={name} defaultValue={options[0]} required>
      {options.map((option) => (
        <MenuItem value={option} key={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}

interface ComboboxProps {
  name: string;
  id: string;
  options: string[];
  handleChange?: (value: string) => void;
}

export default Combobox;
