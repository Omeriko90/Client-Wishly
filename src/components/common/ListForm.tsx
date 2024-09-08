import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import List from "src/types/list";
import FormTextInput from "src/components/common/Form/FormTextInput";
import FormDateInput from "src/components/common/Form/FormDateInput";

interface ListFormProps {
  defaultValues: List;
}

const initialValues: Partial<List> = {
  title: "Gift List",
  description: "This is a list of gifts",
  date: new Date().toISOString(),
};

function ListForm(props: ListFormProps) {
  const { defaultValues } = props;
  const { control, handleSubmit, watch } = useForm<Partial<List>>({
    defaultValues: defaultValues
      ? {
          title: defaultValues?.title,
          description: defaultValues?.description,
          date: defaultValues?.date,
        }
      : initialValues,
  });
  const form = watch();
  console.log(form, defaultValues?.title);
  return (
    <Box>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Box>
          <FormTextInput
            control={control}
            fullWidth
            name="title"
            required
            label="Title"
          />
          <FormTextInput
            control={control}
            name="description"
            required
            fullWidth
            label="Description"
          />
          <FormDateInput control={control} name="date" fullWidth required />
        </Box>
      </form>
    </Box>
  );
}

export default ListForm;
