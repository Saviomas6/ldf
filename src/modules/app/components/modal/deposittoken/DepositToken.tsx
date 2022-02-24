import * as SharedStyles from "../../../../../shared/styles/styled";
import * as Styles from "./styles";
import { Button } from "../../../../../shared/components/button";
import close from "../../../../../assets/images/close.svg";
import { Form, Formik } from "formik";
import {
  InputTextField,
  validationSchema,
} from "../../../../../shared/components/inputfield/InputText";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
import { useNavigate } from "react-router-dom";
interface Values {
  amount: number;
}
const initialValues: Values = {
  amount: 0,
};
const DepositToken = () => {
  const navigate = useNavigate();
  const onSubmit = (values: Values) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <SharedStyles.CustomModal1>
            <Styles.DepositModalContainer>
              <SharedStyles.ModalHeadingWrapper>
                <SharedStyles.ModalHeading>
                  Deposit Token
                </SharedStyles.ModalHeading>
                <SharedStyles.ModalClose
                  src={close}
                  alt="close"
                  onClick={() => {
                    navigate("/pool/pooldetails");
                  }}
                />
              </SharedStyles.ModalHeadingWrapper>
              <Styles.DepositTokenInputWrapper>
                <InputTextField
                  id="number"
                  type="number"
                  placeholder="Enter the amount"
                  label="Token Amount"
                  name="amount"
                />
                <ErrorMessageComp name="amount" />
              </Styles.DepositTokenInputWrapper>
              <Styles.DepositButtonWrapper>
                <Button type="submit">DEPOSIT</Button>
              </Styles.DepositButtonWrapper>
            </Styles.DepositModalContainer>
          </SharedStyles.CustomModal1>
        </Form>
      </Formik>
    </div>
  );
};

export default DepositToken;
