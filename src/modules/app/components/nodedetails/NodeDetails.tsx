import { useState } from "react";
import backarrow from "../../../../assets/images/backarrow.svg";
import * as Styles from "./styles";
import { DPSecondButton } from "../../../../shared/components/button/Button";
import * as SharedStyles from "../../../../shared/styles/styled";
import AddStake from "../modal/addstake";
import PoolCreation from "../modal/poolcreation";
const NodeDetails = () => {
  const [pagenumber, setPagenumber] = useState<number>(0);

  return (
    <div>
      {pagenumber === 1 && (
        <AddStake
          setPagenumber={setPagenumber}
          threedot={false}
          nextpage={false}
        />
      )}
      {pagenumber === 2 && (
        <PoolCreation
          setPagenumber={setPagenumber}
          threedot={false}
          nextpage={false}
        />
      )}
      <Styles.DPFirstContainerWrapper>
        <Styles.DPFirstChildContainer>
          <Styles.DPFirstNodeNameText>DHARMA</Styles.DPFirstNodeNameText>
          <Styles.DPFirstTLTextContainer>
            <Styles.DPFirstTLText1>TOTAL LIQUIDITY</Styles.DPFirstTLText1>
            <Styles.DPFirstTLText2>$1245,256,8954,000.0</Styles.DPFirstTLText2>
          </Styles.DPFirstTLTextContainer>
        </Styles.DPFirstChildContainer>
      </Styles.DPFirstContainerWrapper>
      <SharedStyles.DPSecondContainerWrapper>
        <SharedStyles.DPSecondChildContainer>
          <SharedStyles.DPSecondSubChildCont>
            <SharedStyles.StyledArrowLink to="/pool">
              <SharedStyles.DPSecondArrowGroup>
                <SharedStyles.DPSecondBackArrow
                  src={backarrow}
                  alt="backarrow"
                />
                <SharedStyles.DPSecondBAText>Back</SharedStyles.DPSecondBAText>
              </SharedStyles.DPSecondArrowGroup>
            </SharedStyles.StyledArrowLink>
            <DPSecondButton onClick={() => setPagenumber(1)}>
              Create Pool
            </DPSecondButton>
          </SharedStyles.DPSecondSubChildCont>
        </SharedStyles.DPSecondChildContainer>
      </SharedStyles.DPSecondContainerWrapper>
    </div>
  );
};

export default NodeDetails;
