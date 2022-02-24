import styled from "styled-components";
export const LandingPageContainer = styled.div``;
export const LandingFirstPageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;
export const LandingFirstPageSub1Container = styled.div``;
export const LandingFirstPageSub1ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const LandingFirstPageSub2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LandingFirstPageText1 = styled.div`
  font-size: 48px;
  color: #ffffff;
  font-family: Bold;
`;
export const LandingFirstPageText2 = styled.div`
  font-size: 28px;
  margin-top: 3px;
  color: #ffffff;
  font-family: Regular;
`;
export const LandingPageButtonWrapper = styled.div`
  margin-top: 40px;
`;
export const LPFirstButton1 = styled.button`
  width: 179px;
  height: 63px;
  text-align: center;
  border-radius: 30px;
  font-family: Bold;
  font-size: 18px;
  border: 3px solid transparent;
  background: linear-gradient(to bottom, #000a2b, #000a2b),
    linear-gradient(to bottom, #0052ff, #8a01de);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  color: #ffffff;
`;
export const LPFirstButton2 = styled(LPFirstButton1)`
  background: linear-gradient(to bottom, #000a2b, #000a2b),
    linear-gradient(to bottom, #2b009d, #2b009d);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  margin-left: 7px;
`;
export const LandingPageImage = styled.img`
  height: 550px;
  width: 650px;
  margin-top: 50px;
`;
export const LandingSecondPageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  padding: 0px 40px;
  margin-top: 20px;
`;
export const LandingSecondPageChildContainer = styled.div`
  width: 415px;
  height: 159px;
  border: 2px solid transparent;
  border-image: linear-gradient(
    to bottom,
    rgba(0, 73, 229, 1),
    rgba(26, 9, 86, 0)
  );
  border-image-slice: 1;

`;
export const LandingSecondPageText1 = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-family: Black;
`;
export const LandingSecondPageText2 = styled.div`
  font-size: 14px;
  color: #ffffff;
  font-family: Bold;
  margin-top: 5px;
`;
export const LandingSecondPageText3 = styled.div`
  font-size: 18px;
  font-family: Bold;
  text-decoration: underline;
  color: #8b00de;
  margin-top: 20px;
  
`;

export const LandingSecondPageChildSubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const LandingPageTextWrapper = styled.div`
  width: 230px;
`;