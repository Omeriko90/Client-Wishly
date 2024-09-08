import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface FormTextInputProps {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
}

function FormTextInput(props: FormTextInputProps) {
  const { control, name, label, placeholder, required, fullWidth } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, ...props }) => (
        <TextField
          label={label}
          {...field}
          fullWidth={fullWidth}
          placeholder={placeholder}
          required={required}
          type="text"
          {...props}
        />
      )}
    />
  );
}

export default FormTextInput;
