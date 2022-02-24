import { ErrorMessage } from "formik";
import { ErrorWrapper } from "./styles";
interface Iprops {
  name: string;
}
export const ErrorMessageComp = ({ name }: Iprops) => {
  return (
    <ErrorWrapper>
      <ErrorMessage name={name} />
    </ErrorWrapper>
  );
};
