import { Button } from "../../../../shared/components/button";
import {
  MainWrapper,
  TableHeaderText,
  Wrapper,
} from "../../../../shared/components/table/styles";
import * as SharedStyles from "../../../../shared/styles/styled";
import * as Styles from "./styles";
const Kyc = () => {
  return (
    <div>
      <Styles.KycResFirstContainer>
        <Styles.KycResFirstChildCont>
          <Styles.KycResFirstContText>
            KYC DOCUMENT PDF
          </Styles.KycResFirstContText>
          <div>
            <SharedStyles.KycButton>View</SharedStyles.KycButton>
          </div>
        </Styles.KycResFirstChildCont>
      </Styles.KycResFirstContainer>
      <MainWrapper>
        <Wrapper>
          <Styles.KycTableHeaderWrapper>
            <Styles.KycTableHeaderWrapperChild1>
              <TableHeaderText>KYC DOCUMENT PDF</TableHeaderText>
            </Styles.KycTableHeaderWrapperChild1>
            <Styles.KycTableHeaderText>
              Loan Description
            </Styles.KycTableHeaderText>
            <Styles.KycTableHeaderWrapperChild2>
              <SharedStyles.KycButton>View</SharedStyles.KycButton>
            </Styles.KycTableHeaderWrapperChild2>
          </Styles.KycTableHeaderWrapper>
          <Styles.KycContent>
            <Styles.KycChildContent>
              <Styles.KycSubChildContent>
                <Styles.KycContentSubChild1>
                  Loan Description
                </Styles.KycContentSubChild1>
                <Styles.KycContentSubChild2>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Styles.KycContentSubChild2>
              </Styles.KycSubChildContent>
            </Styles.KycChildContent>
            <Styles.KycHR />
          </Styles.KycContent>
        </Wrapper>
      </MainWrapper>
      <Styles.KycButtonWrapper>
        <Button>APPROVE</Button>
        <Styles.KycButton1>DECLINE</Styles.KycButton1>
      </Styles.KycButtonWrapper>
      <Styles.KycResButtonWrapper>
        <SharedStyles.KycButton>Approve</SharedStyles.KycButton>
        <SharedStyles.KycResButton1>Decline</SharedStyles.KycResButton1>
      </Styles.KycResButtonWrapper>
    </div>
  );
};

export default Kyc;
