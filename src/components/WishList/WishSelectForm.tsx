import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useSelectWish from "src/hooks/useSelectWIsh";
export interface SelectWishFormValues {
  fullName: string;
  email: string;
}

interface WishFormProps {
  wishId: string;
  onClose: () => void;
}

function WishSelectForm(props: WishFormProps) {
  const { wishId, onClose } = props;
  const { control, handleSubmit } = useForm<SelectWishFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const handleSelectSuccess = () => {
    window.confetti({ zIndex: 1301 });
    setTimeout(() => onClose(), 1000);
  };
  const { mutate: selectWish } = useSelectWish(wishId, handleSelectSuccess);

  const handleSubmitForm = (values: SelectWishFormValues) => {
    selectWish(values);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box sx={{ marginBlock: 2 }}>
        <Typography variant="h6" sx={{ fontSize: 18 }}>
          Partecipant Details:
        </Typography>
      </Box>
      <Grid container gap={1}>
        <Grid item xs={12} md={5}>
          <Controller
            control={control}
            name="fullName"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Full Name"
                fullWidth
                type="text"
                placeholder="John Doe"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Email"
                type="text"
                placeholder="johndoe@gmail.com"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 1, display: "flex" }}>
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default WishSelectForm;
