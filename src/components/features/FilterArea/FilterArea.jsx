import { useForm } from "react-hook-form";
import { FormContainer, InputKeep } from "./styles";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";

import Button from "../../common/Button/Button";
import FormSelect from "../../common/FormSelect/FormSelect";

import TimePicker from "../../common/FormTimePicker/TimePicker";
import CalendarFunction from "../../common/Calendar/Calendar";

export default function FilterArea({ onSubmit, color, ...props }) {
  const {
    handleSubmit,
    buttonText,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
    setValue,
    requestError,
    loading,
  } = useForm({});

  function submitHandler(data) {
    onSubmit(data);
    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      <InputKeep>
        <FormSelect
          label={label}
          register={register}
          defaultValue={input?.value}
          isSubmitSuccessful={isSubmitSuccessful}
          placeholder={input?.placeholder}
          setSelectType={props?.setSelectType}
        />
      </InputKeep>
      <InputKeep>
        <CalendarFunction
          label={label}
          placeholder={placeholder}
          control={control}
          setValue={setValue}
          defaultValue={input?.defaultValue}
          isSubmitSuccessful={isSubmitSuccessful}
          onChange={(date) => setValue(key, date, { shouldValidate: true })}
          color={color}
        />
      </InputKeep>
      <InputKeep></InputKeep>
      <InputKeep>
        <TimePicker
          format="HH:mm:ss"
          placeholder={placeholder}
          setValue={setValue}
          control={control}
        />
      </InputKeep>

      <Button type="submit" fontSize="1.2em" width="40% !important">
        {loading ? <LoadingOutlined /> : buttonText}
      </Button>
    </FormContainer>
  );
}
FilterArea.PropTypes = {
  inputs: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  color: PropTypes.string,
};
