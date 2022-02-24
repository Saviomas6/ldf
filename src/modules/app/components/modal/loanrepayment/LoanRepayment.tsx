import { useState } from "react";
import close from "../../../../../assets/images/close.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import * as StylesComp1 from "../../../../../shared/components/button";
import { RangeSliderWrapper } from "../../../../../shared/components/inputslider/styles";
// import * as StylesComp2 from "../../../../../shared/components/InputSlider";
const LoanRepayment = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  console.log("value", sliderValue);

  const handleSliderChange = (e: any) => {
    setSliderValue(e.target.value);
  };
  return (
    <SharedStyles.CustomModal1>
      <SharedStyles.ModalContainer>
        <SharedStyles.ModalHeadingWrapper>
          <SharedStyles.ModalHeading>Loan Repayment</SharedStyles.ModalHeading>
          <SharedStyles.ModalClose src={close} alt="close" />
        </SharedStyles.ModalHeadingWrapper>

        <SharedStyles.WithdrawAmountWrapper>
          <SharedStyles.DAmount>Borrowed Amount</SharedStyles.DAmount>
          <SharedStyles.NAmount>{sliderValue} USDT</SharedStyles.NAmount>
        </SharedStyles.WithdrawAmountWrapper>

        <StylesComp.ModalInputWrapper>
          <StylesComp.Label htmlFor="ramount">Repay Amount</StylesComp.Label>
          <StylesComp.InputField1
            id="ramount"
            type="number"
            placeholder="Enter the amount"
            onChange={handleSliderChange}
            value={sliderValue}
          />
        </StylesComp.ModalInputWrapper>
        <RangeSliderWrapper>
          {/* <StylesComp2.InputRangeSlider
            type="range"
            min="0"
            max="1000"
            step="1"
            onChange={handleSliderChange}
            value={sliderValue}
          /> */}
        </RangeSliderWrapper>
        <StylesComp1.ButtonWrapper>
          <StylesComp1.Button>Repay</StylesComp1.Button>
        </StylesComp1.ButtonWrapper>
      </SharedStyles.ModalContainer>
    </SharedStyles.CustomModal1>
  );
};

export default LoanRepayment;
