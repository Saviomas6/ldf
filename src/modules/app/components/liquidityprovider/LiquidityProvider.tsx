import * as SharedStyles from "../../../../shared/styles/styled";
import backarrow from "../../../../assets/images/backarrow.svg";
import * as Styles from "./styles";
import { DPSecondButton } from "../../../../shared/components/button/Button";
const LiquidityProvider = () => {
  return (
    <div>
      <Styles.LiquidtyProviderFirstWrapper>
        <Styles.LPFirstSubWrapper>
          <Styles.LPFSub1>TREASURY</Styles.LPFSub1>
          <Styles.LPFSub2>$1245,256</Styles.LPFSub2>
        </Styles.LPFirstSubWrapper>
        <Styles.LPSecondSubWrapper>
          <Styles.LPFSub1>LDF PRICE</Styles.LPFSub1>
          <Styles.LPFSub2>$2516,256</Styles.LPFSub2>
        </Styles.LPSecondSubWrapper>
      </Styles.LiquidtyProviderFirstWrapper>
      {/* <SharedStyles.DPSecondContainerWrapper>
        <SharedStyles.DPSecondChildContainer>
          <SharedStyles.DPSecondSubChildCont>
            <SharedStyles.DPSecondArrowGroup>
              <SharedStyles.DPSecondBackArrow src={backarrow} alt="backarrow" />
              <SharedStyles.DPSecondBAText>Back</SharedStyles.DPSecondBAText>
            </SharedStyles.DPSecondArrowGroup>
            <DPSecondButton>View Treasury</DPSecondButton>
          </SharedStyles.DPSecondSubChildCont>
        </SharedStyles.DPSecondChildContainer>
      </SharedStyles.DPSecondContainerWrapper> */}
    </div>
  );
};

export default LiquidityProvider;
