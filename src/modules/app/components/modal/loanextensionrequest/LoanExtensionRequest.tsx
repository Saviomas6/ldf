import close from "../../../../../assets/images/close.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import { LoanExtInput } from "./styles";
import * as StylesComp from "../../../../../shared/components/inputfield/styles";
import * as StylesComp1 from "../../../../../shared/components/button";
const LoanExtensionRequest = () => {
  return (
    <div>
      <SharedStyles.CustomModal1>
        <SharedStyles.ModalContainer>
          <SharedStyles.ModalHeadingWrapper>
            <SharedStyles.ModalHeading>
              Loan Extension <br />
              Request
            </SharedStyles.ModalHeading>
            <SharedStyles.ModalClose src={close} alt="close" />
          </SharedStyles.ModalHeadingWrapper>
          <StylesComp.LoanExtReqInputWrapper>
            <StylesComp.Label htmlFor="loanid">Loan ID</StylesComp.Label>
            <StylesComp.InputField1
              id="loanid"
              type="text"
              placeholder="Enter your Loan ID"
            />
          </StylesComp.LoanExtReqInputWrapper>

          <StylesComp.LoanExtReqInputWrapper>
            <StylesComp.Label htmlFor="lextens">
              Reason of Loan Extension
            </StylesComp.Label>
            <LoanExtInput id="lextens" placeholder="Enter your message..." />
          </StylesComp.LoanExtReqInputWrapper>
          <StylesComp1.LoanExtensionButWrapper>
            <StylesComp1.Button>Send</StylesComp1.Button>
          </StylesComp1.LoanExtensionButWrapper>
        </SharedStyles.ModalContainer>
      </SharedStyles.CustomModal1>
    </div>
  );
};

export default LoanExtensionRequest;
