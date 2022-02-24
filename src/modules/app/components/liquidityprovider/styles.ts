import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";


export const LiquidtyProviderFirstWrapper = styled.div`
  color: ${colors.white};
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
  margin: 30px 0px;
`;
export const LPFirstSubWrapper = styled.div`
  border-right: 3px solid;
  border-image: linear-gradient(
      to bottom,
      #010a2b,
      #001b4f,
      #002875,
      #00349d,
      #0040c6,
      #0040c6,
      #0040c7,
      #0040c7,
      #00349e,
      #002877,
      #001b51,
      #030c2e
    )
    10;
  padding: 15px;
  text-align: right;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
    height: 50px;
    }
`;
export const LPSecondSubWrapper = styled.div`
  height: 105px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
    height: 50px;
    }
`;
export const LPFSub1 = styled.div`
  font-size: 16px;
font-family: Bold;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  font-size: 12px;
    }
`;
export const LPFSub2 = styled.div`
  font-size:36px;
  font-family: Bold;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
  font-size: 18px;
    }
`;






