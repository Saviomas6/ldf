import close from "../../assets/images/close.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
// import * as StylesComp1 from "../../../../../shared/components/InputSlider";
import * as StylesComp2 from "../../../../../shared/components/button";
import { RangeSliderWrapper } from "../../../../../shared/components/inputslider/styles";
const Withdraw = () => {
  return (
    <SharedStyles.CustomModal1>
      <SharedStyles.ModalContainer>
        <SharedStyles.ModalHeadingWrapper>
          <SharedStyles.ModalHeading>Withdraw</SharedStyles.ModalHeading>
          <SharedStyles.ModalClose src={close} alt="close" />
        </SharedStyles.ModalHeadingWrapper>

        <SharedStyles.WithdrawAmountWrapper>
          <SharedStyles.DAmount>Deposited Amount</SharedStyles.DAmount>
          <SharedStyles.NAmount>9,225.3027 USDT</SharedStyles.NAmount>
        </SharedStyles.WithdrawAmountWrapper>

        <StylesComp.ModalInputWrapper>
          <StylesComp.Label htmlFor="wamount">Withdraw Amount</StylesComp.Label>
          <StylesComp.InputField1
            id="wamount"
            type="number"
            placeholder="Enter the amount"
          />
        </StylesComp.ModalInputWrapper>
        <RangeSliderWrapper>
          {/* <StylesComp1.InputRangeSlider type="range" min="0" max="100" /> */}
        </RangeSliderWrapper>
        <StylesComp2.ButtonWrapper>
          <StylesComp2.Button>Withdraw</StylesComp2.Button>
        </StylesComp2.ButtonWrapper>
      </SharedStyles.ModalContainer>
    </SharedStyles.CustomModal1>
  );
};

export default Withdraw;
