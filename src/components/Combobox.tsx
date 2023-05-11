import { MenuItem, SelectProps, TextField } from "@mui/material";

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
