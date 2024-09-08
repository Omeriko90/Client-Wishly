import { Control, Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import {
  DateTimePicker,
  LocalizationProvider,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
interface FormDateInputProps {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
}

function FormDateInput(props: FormDateInputProps) {
  const { control, name, label, required } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        rules={{ required: required }}
        control={control}
        render={(props) => (
          <>
            <Typography variant="body1">{label}</Typography>
            <DateTimePicker
              {...props}
              slotProps={{ field: { sx: { width: "100%" } } }}
              label="With Time Clock"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
}

export default FormDateInput;
