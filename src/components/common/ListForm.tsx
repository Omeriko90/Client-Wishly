import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import List from "src/types/list";
import FormTextInput from "src/components/common/Form/FormTextInput";
import FormDateInput from "src/components/common/Form/FormDateInput";

interface ListFormProps {
  defaultValues: List;
  onSubmit: (data: List) => void;
  header: JSX.Element;
}

const initialValues: Partial<List> = {
  title: "Gift List",
  description: "This is a list of gifts",
  date: new Date().toISOString(),
};

function ListForm(props: ListFormProps) {
  const { defaultValues, onSubmit, header = null } = props;
  const { control, handleSubmit } = useForm<List>({
    defaultValues: defaultValues
      ? {
          title: defaultValues?.title,
          description: defaultValues?.description,
          date: defaultValues?.date,
        }
      : initialValues,
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <form
        style={{
          width: "100%",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {header}
        <Box>
          <FormTextInput
            control={control}
            fullWidth
            name="title"
            required
            label="Title"
            sx={{ marginBottom: 2 }}
          />
          <FormTextInput
            control={control}
            name="description"
            required
            fullWidth
            label="Description"
            sx={{ marginBottom: 2 }}
          />
          <FormDateInput control={control} name="date" fullWidth required />
        </Box>
      </form>
    </Box>
  );
}

export default ListForm;
