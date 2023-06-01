import TextField from "@mui/material/TextField";
import { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Combobox({ options, id, name, label }: ComboboxProps) {
  return (
    <>
      <TextField
        id={id}
        name={name}
        defaultValue={options[0]}
        label={label}
        select
        required
        fullWidth
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

interface ComboboxProps extends SelectProps {
  options: string[];
}

export default Combobox;
