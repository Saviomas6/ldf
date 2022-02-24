import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import close from "../../../../../assets/images/close.svg";
import date from "../../../../../assets/images/calender.svg";
import { DateLogo } from "./styles";
import * as SharedStyles from "../../../../../shared/styles/styled";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import * as StylesComp1 from "../../../../../shared/components/button";
export const ExampleCustomInput = React.forwardRef(
  ({ value, onChange, onFocus }: any, ref) => {
    return (
      <StylesComp.InputField1
        placeholder="DD/MM/YYYY"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
      />
    );
  }
);
const LoanExtension = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div>
      <SharedStyles.CustomModal1>
        <SharedStyles.ModalContainer>
          <SharedStyles.ModalHeadingWrapper>
            <SharedStyles.ModalHeading>
              Loan Extension
            </SharedStyles.ModalHeading>
            <SharedStyles.ModalClose src={close} alt="close" />
          </SharedStyles.ModalHeadingWrapper>
          <StylesComp.LoanExtReqInputWrapper>
            <StylesComp.Label htmlFor="dol">
              Date of Loan Extension
            </StylesComp.Label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
              dateFormat="dd/MM/yyyy"
              withPortal
            />
            <DateLogo src={date} alt="date" />
          </StylesComp.LoanExtReqInputWrapper>
          <StylesComp.LoanExtReqInputWrapper>
            <StylesComp.Label htmlFor="roi">
              Rate of Interest after Extension
            </StylesComp.Label>
            <StylesComp.InputField1
              id="roi"
              type="text"
              placeholder="Enter the ROI"
            />
          </StylesComp.LoanExtReqInputWrapper>
          <StylesComp1.LoanExtensionButWrapper>
            <StylesComp1.Button>APPROVE</StylesComp1.Button>
          </StylesComp1.LoanExtensionButWrapper>
        </SharedStyles.ModalContainer>
      </SharedStyles.CustomModal1>
    </div>
  );
};

export default LoanExtension;
