import close from "../../../../../assets/images/close.svg";
import blackdot from "../../../../../assets/images/blackdot.svg";
import whitedot from "../../../../../assets/images/whitedot.svg";
import userAvatar from "../../../../../assets/images/userAvatar.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as Styles from "./styles";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import { Button, ButtonWrapper } from "../../../../../shared/components/button";
import { InputTextField } from "../../../../../shared/components/inputfield/InputText";
import { Form, Formik } from "formik";
import { validationSchema } from "../../../../../shared/components/inputfield/InputText";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";

interface Values {
  nodename: string;
}
const initialValues: Values = {
  nodename: "",
};
const onSubmit = (values: Values) => {
  console.log(values);
};
const BankingNode = ({ setPage }: any) => {
  const NextPage = () => {
    setPage((page: number) => page + 1);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <SharedStyles.CustomModal1>
            <SharedStyles.ModalContainer>
              <SharedStyles.ModalHeadingWrapper>
                <SharedStyles.ModalHeading>
                  Banking Node Setup
                </SharedStyles.ModalHeading>
                <SharedStyles.ModalClose src={close} />
              </SharedStyles.ModalHeadingWrapper>
              <Styles.AvatarWrapper>
                <Styles.AvatarImg src={userAvatar} />
                <Styles.AvatarText>Avatar</Styles.AvatarText>
              </Styles.AvatarWrapper>

              <StylesComp.ModalInputWrapper>
                <InputTextField
                  id="username"
                  type="text"
                  placeholder="Enter the username"
                  name="nodename"
                  label="User Name"
                />
                <ErrorMessageComp name="nodename" />
              </StylesComp.ModalInputWrapper>
              <ButtonWrapper>
                <SharedStyles.DottedImageWrapper>
                  <SharedStyles.DottedImage src={blackdot} />
                  <SharedStyles.DottedImage src={whitedot} />
                  <SharedStyles.DottedImage src={whitedot} />
                </SharedStyles.DottedImageWrapper>
                <Button type="submit" onClick={NextPage}>
                  NEXT
                </Button>
              </ButtonWrapper>
            </SharedStyles.ModalContainer>
          </SharedStyles.CustomModal1>
        </Form>
      </Formik>
    </div>
  );
};

export default BankingNode;
