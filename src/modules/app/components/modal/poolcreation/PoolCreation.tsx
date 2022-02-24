import close from "../../../../../assets/images/close.svg";
import blackdot from "../../../../../assets/images/blackdot.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import * as StylesComp1 from "../../../../../shared/components/button";
import { Form, Formik } from "formik";
import {
  InputTextField,
  validationSchema,
} from "../../../../../shared/components/inputfield/InputText";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
const onSubmit = () => {};
interface Values {
  poolname: string;
  tokenaddress: string;
  tokenamount: number | undefined;
}
const initialValues: Values = {
  poolname: "",
  tokenaddress: "",
  tokenamount: undefined,
};
const PoolCreation = ({ setPage, threedot, setPagenumber, nextpage }: any) => {
  const NextPage = () => {
    setPage((page: number) => page + 1);
  };
  const NextPageNumber = () => {
    setPagenumber((pagenumber: number) => pagenumber + 1);
  };
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form>
          <SharedStyles.CustomModal1>
            <SharedStyles.ModalContainer>
              <SharedStyles.ModalHeadingWrapper>
                <SharedStyles.ModalHeading>
                  Create Pool
                </SharedStyles.ModalHeading>
                <SharedStyles.ModalClose src={close} />
              </SharedStyles.ModalHeadingWrapper>
              <StylesComp.ModalInputWrapper>
                <InputTextField
                  id="pool"
                  type="text"
                  placeholder="Enter the pool name"
                  name="poolname"
                  label="Name of Pool"
                />
                <ErrorMessageComp name="poolname" />
              </StylesComp.ModalInputWrapper>
              <StylesComp.ModalInputWrapper>
                <InputTextField
                  id="token"
                  type="text"
                  placeholder="Enter the token address"
                  name="tokenaddress"
                  label="Token Address"
                />
                <ErrorMessageComp name="tokenaddress" />
              </StylesComp.ModalInputWrapper>
              <StylesComp.ModalInputWrapper>
                <InputTextField
                  id="tamount"
                  type="number"
                  placeholder="Enter the token amount"
                  name="tokenamount"
                  label="Token Amount"
                />
                <ErrorMessageComp name="tokenamount" />
              </StylesComp.ModalInputWrapper>
              <StylesComp1.ButtonWrapper>
                <SharedStyles.DottedImageWrapper>
                  {threedot ? (
                    <div>
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={blackdot} />
                    </div>
                  ) : (
                    <div>
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={blackdot} />
                    </div>
                  )}
                </SharedStyles.DottedImageWrapper>
                {nextpage ? (
                  <StylesComp1.Button onClick={NextPage}>
                    Submit
                  </StylesComp1.Button>
                ) : (
                  <StylesComp1.Button onClick={NextPageNumber}>
                    Submit
                  </StylesComp1.Button>
                )}
              </StylesComp1.ButtonWrapper>
            </SharedStyles.ModalContainer>
          </SharedStyles.CustomModal1>
        </Form>
      </Formik>
    </div>
  );
};

export default PoolCreation;
