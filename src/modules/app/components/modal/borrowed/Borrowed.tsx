import close from "../../../../../assets/images/close.svg";
import { CustomModal1 } from "../../../../../shared/styles/styled";
import * as Styles from "./styles";
import { Form, Formik } from "formik";
import { validationSchema } from "../../../../../shared/components/inputfield/InputText";
import { InputRangeSliderField } from "../../../../../shared/components/inputslider/InputSlider";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
import { useNavigate } from "react-router-dom";
interface Values {
  amount: number;
}
const initialValues: Values = {
  amount: 0,
};
const Borrowed = () => {
  const navigate = useNavigate();
  const onSubmit = (values: Values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <CustomModal1>
          <Styles.BorrowModalContainer>
            <Styles.BorrowFirstWrapperRes>
              <Styles.BorrowFirstWrapperSub1Res>
                <Styles.BorrowFirstWrapperResText1>
                  YOU BORROWED
                </Styles.BorrowFirstWrapperResText1>
                <Styles.BorrowFirstWrapperResText2>
                  9,445.3027USDT
                </Styles.BorrowFirstWrapperResText2>
              </Styles.BorrowFirstWrapperSub1Res>
              <Styles.BorrowModalClose
                src={close}
                alt="close"
                onClick={() => {
                  navigate("/pool/pooldetails");
                }}
              />
              <Styles.BorrowFirstWrapperSub2Res>
                <Styles.BorrowFirstWrapperSub2ChildRes>
                  <Styles.BorrowFirstWrapperSub2Child1Res>
                    <Styles.BorrowFirstWrapperSub2Child1Text1>
                      TOTAL COLLATERAL
                    </Styles.BorrowFirstWrapperSub2Child1Text1>
                    <Styles.BorrowFirstWrapperSub2Child1Text2>
                      $ 1245,256
                    </Styles.BorrowFirstWrapperSub2Child1Text2>
                  </Styles.BorrowFirstWrapperSub2Child1Res>
                  <Styles.BorrowFirstWrapperSub2Child2Res>
                    <Styles.BorrowFirstWrapperSub2Child1Text1>
                      LOAN TO VALUE
                    </Styles.BorrowFirstWrapperSub2Child1Text1>
                    <Styles.BorrowFirstWrapperSub2Child1Text2>
                      73.48%
                    </Styles.BorrowFirstWrapperSub2Child1Text2>
                  </Styles.BorrowFirstWrapperSub2Child2Res>
                </Styles.BorrowFirstWrapperSub2ChildRes>
              </Styles.BorrowFirstWrapperSub2Res>
            </Styles.BorrowFirstWrapperRes>
            <Styles.BorrowSecondWrapperRes>
              <p>Available Liquidity:100.01USDT</p>
              <p>Assest Price:$1.00</p>
            </Styles.BorrowSecondWrapperRes>
            <Styles.BorrowFirstWrapper>
              <Styles.FirstWrapper>
                <Styles.FirstWrapperText1>
                  You Borrowed
                </Styles.FirstWrapperText1>
                <Styles.FirstWrapperText2>
                  9,445.3027USDT
                </Styles.FirstWrapperText2>
              </Styles.FirstWrapper>
              <Styles.FirstWrapper>
                <Styles.FirstWrapperText1>
                  Total Collateral
                </Styles.FirstWrapperText1>
                <Styles.FirstWrapperText2>
                  34,890.5789USD
                </Styles.FirstWrapperText2>
              </Styles.FirstWrapper>
              <Styles.FirstWrapper>
                <Styles.FirstWrapperText1>
                  Loan To Value
                </Styles.FirstWrapperText1>
                <Styles.FirstWrapperText2>73.48%</Styles.FirstWrapperText2>
              </Styles.FirstWrapper>
              <Styles.BorrowModalClose
                src={close}
                alt="close"
                onClick={() => {
                  navigate("/pool/pooldetails");
                }}
              />
            </Styles.BorrowFirstWrapper>
            <Styles.BorrowSecondContainer>
              <Styles.SecondContainer>
                <p>Available Liquidity:100.01USDT</p>
                <p>Assest Price:$1.00</p>
              </Styles.SecondContainer>
            </Styles.BorrowSecondContainer>
            <Styles.BorrowThirdContainer>
              <p>How much would you like to borrow?</p>
              <p>
                Please enter an amount you would like to borrow. The maximum
                amount you can borrow is shown below.
              </p>
            </Styles.BorrowThirdContainer>

            <Styles.BorrowFourthContainer>
              <Styles.BorrowFourthSubContainer>
                <Styles.AmountWrapper>
                  <Styles.AmountText>Available To Borrow</Styles.AmountText>
                  <Styles.AmountText>15,990.956698 USDT</Styles.AmountText>
                </Styles.AmountWrapper>
                <Styles.BorrowInputWrapper>
                  <Styles.BorrowInputTextField
                    id="stake"
                    type="number"
                    placeholder="Enter the amount"
                    name="amount"
                  />
                </Styles.BorrowInputWrapper>
                <ErrorMessageComp name="amount" />
                <Styles.BorrowRangeWrapper>
                  <InputRangeSliderField
                    type="range"
                    min="0"
                    max="1000"
                    step="1"
                    name="amount"
                  />
                </Styles.BorrowRangeWrapper>
                <Styles.BorrowButtonWrapper>
                  <Styles.BorrowButtonRes type="submit">
                    REQUEST
                  </Styles.BorrowButtonRes>
                </Styles.BorrowButtonWrapper>
              </Styles.BorrowFourthSubContainer>
            </Styles.BorrowFourthContainer>
          </Styles.BorrowModalContainer>
        </CustomModal1>
      </Form>
    </Formik>
  );
};

export default Borrowed;
