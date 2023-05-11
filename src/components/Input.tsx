import { TextField, TextFieldProps } from "@mui/material";

function Input({ label, type, name }: TextFieldProps) {
  return <TextField fullWidth label={label} type={type} name={name} required />;
}

export default Input;
