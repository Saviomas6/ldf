import close from "../../../../../assets/images/close.svg";
import blackdot from "../../../../../assets/images/blackdot.svg";
import whitedot from "../../../../../assets/images/whitedot.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import * as Styles from "./styles";
import { Form, Formik } from "formik";
import {
  InputTextField1,
  validationSchema,
} from "../../../../../shared/components/inputfield/InputText";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
interface Values {
  ldfstake: number | undefined;
}
const initialValues: Values = {
  ldfstake: undefined,
};
const AddStake = ({ setPage, threedot, setPagenumber, nextpage }: any) => {
  const NextPage = () => {
    setPage((page: number) => page + 1);
  };
  const NextPageNumber = () => {
    setPagenumber((pagenumber: number) => pagenumber + 1);
  };
  const PreviousPage = () => {
    setPage((page: number) => page - 1);
  };
  const onSubmit = () => {};
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form>
          <SharedStyles.CustomModal1>
            <SharedStyles.ModalContainer>
              <SharedStyles.ModalHeadingWrapper>
                <SharedStyles.ModalHeading>Add Stake</SharedStyles.ModalHeading>
              </SharedStyles.ModalHeadingWrapper>
              <SharedStyles.ModalClose src={close} />
              <StylesComp.ModalInputWrapper>
                <InputTextField1
                  id="stake"
                  type="number"
                  placeholder="Enter the amount"
                  name="ldfstake"
                  label="Lock 1M LDF"
                />
                <ErrorMessageComp name="ldfstake" />
                <Styles.InputFieldtext>
                  Min. 1M LDF to create a pool
                </Styles.InputFieldtext>
              </StylesComp.ModalInputWrapper>
              <Styles.TimelineButtonWrapper>
                <SharedStyles.DottedImageWrapper>
                  {threedot ? (
                    <div>
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={whitedot} />
                    </div>
                  ) : (
                    <div>
                      <SharedStyles.DottedImage src={blackdot} />
                      <SharedStyles.DottedImage src={whitedot} />
                    </div>
                  )}
                </SharedStyles.DottedImageWrapper>

                {nextpage ? (
                  <Styles.ButtonWrap>
                    <Styles.Button1 onClick={PreviousPage}>ADD</Styles.Button1>
                    <Styles.Button1 onClick={NextPage}>NEXT</Styles.Button1>
                  </Styles.ButtonWrap>
                ) : (
                  <Styles.ButtonWrap>
                    <Styles.Button1>ADD</Styles.Button1>
                    <Styles.Button1 onClick={NextPageNumber}>
                      NEXT
                    </Styles.Button1>
                  </Styles.ButtonWrap>
                )}
              </Styles.TimelineButtonWrapper>
            </SharedStyles.ModalContainer>
          </SharedStyles.CustomModal1>
        </Form>
      </Formik>
    </div>
  );
};

export default AddStake;
