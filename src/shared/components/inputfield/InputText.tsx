import { InputField, InputField1, Label } from "./styles";
import * as Yup from "yup";
import { LPInputField, LPLabel } from "../../styles/styled";
interface Iprops {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  label: string;
}
export const validationSchema = Yup.object({
  amount: Yup.number()
    .positive("Please enter a valid amount!")
    .min(0.01, "Value should be greater than 0.01")
    .required("This field cannot be left blank!"),
  // nodename: Yup.string()
  //   .min(5, "Entered value is too short!")
  //   .max(10, "Entered value is too long!")
  //   .required("This field cannot be left blank!"),
  // ldfstake: Yup.number()
  //   .positive("Please enter a valid amount!")
  //   .required("This field cannot be left blank!"),
  // poolname: Yup.string()
  //   .min(5, "Entered value is too short!")
  //   .max(10, "Entered value is too long!")
  //   .required("This field cannot be left blank!"),
  // tokenaddress: Yup.string()
  //   .min(42, "Entered value is too short!")
  //   .max(42, "Entered value is too long!")
  //   .required("This field cannot be left blank!"),
  // tokenamount: Yup.number()
  //   .positive("Please enter a valid amount!")
  //   .required("This field cannot be left blank!"),
});
export const InputTextField = ({
  id,
  type,
  placeholder,
  name,
  label,
}: Iprops) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} placeholder={placeholder} name={name} />
    </>
  );
};
export const InputTextField1 = ({
  id,
  type,
  placeholder,
  name,
  label,
}: Iprops) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <InputField1 id={id} type={type} placeholder={placeholder} name={name} />
    </>
  );
};

export const InputTextFieldLP = ({
  id,
  type,
  placeholder,
  name,
  label,
}: Iprops) => {
  return (
    <>
      <LPLabel htmlFor={id}>{label}</LPLabel>
      <LPInputField id={id} type={type} placeholder={placeholder} name={name} />
    </>
  );
};
