import landing from "../../assets/images/landing.svg";
import lppool from "../../assets/images/lppool.svg";
import lplender from "../../assets/images/lplender.svg";
import lpclaimreward from "../../assets/images/lpclaimreward.svg";
import * as Styles from "./styles";
const Home = () => {
  return (
    <div>
      <Styles.LandingPageContainer>
        <Styles.LandingFirstPageContainer>
          <Styles.LandingFirstPageSub1Container>
            <Styles.LandingFirstPageSub1ChildContainer>
              <Styles.LandingFirstPageText1>
                DeFi yield on autopilot
              </Styles.LandingFirstPageText1>
              <Styles.LandingFirstPageText2>
                Earning interest on deposits and
                <br /> borrowing assests.
              </Styles.LandingFirstPageText2>
              <Styles.LandingPageButtonWrapper>
                <Styles.LPFirstButton1>LEND</Styles.LPFirstButton1>
                <Styles.LPFirstButton2>BORROW</Styles.LPFirstButton2>
              </Styles.LandingPageButtonWrapper>
            </Styles.LandingFirstPageSub1ChildContainer>
          </Styles.LandingFirstPageSub1Container>
          <Styles.LandingFirstPageSub2Container>
            <Styles.LandingPageImage src={landing} alt="langingpage" />
          </Styles.LandingFirstPageSub2Container>
        </Styles.LandingFirstPageContainer>
        <Styles.LandingSecondPageContainer>
          <Styles.LandingSecondPageChildContainer>
            <Styles.LandingSecondPageChildSubContainer>
              <div>
                <img src={lppool} alt="poolicon" />
              </div>
              <Styles.LandingPageTextWrapper>
                <Styles.LandingSecondPageText1>
                  POOL
                </Styles.LandingSecondPageText1>
                <Styles.LandingSecondPageText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Styles.LandingSecondPageText2>
                <Styles.LandingSecondPageText3>
                  CREATE POOL
                </Styles.LandingSecondPageText3>
              </Styles.LandingPageTextWrapper>
            </Styles.LandingSecondPageChildSubContainer>
          </Styles.LandingSecondPageChildContainer>
          <Styles.LandingSecondPageChildContainer>
            <Styles.LandingSecondPageChildSubContainer>
              <div>
                <img src={lplender} alt="poolicon" />
              </div>
              <Styles.LandingPageTextWrapper>
                <Styles.LandingSecondPageText1>
                  LENDERS
                </Styles.LandingSecondPageText1>
                <Styles.LandingSecondPageText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Styles.LandingSecondPageText2>
                <Styles.LandingSecondPageText3>
                  LEND
                </Styles.LandingSecondPageText3>
              </Styles.LandingPageTextWrapper>
            </Styles.LandingSecondPageChildSubContainer>
          </Styles.LandingSecondPageChildContainer>
          <Styles.LandingSecondPageChildContainer>
            <Styles.LandingSecondPageChildSubContainer>
              <div>
                <img src={lpclaimreward} alt="poolicon" />
              </div>
              <Styles.LandingPageTextWrapper>
                <Styles.LandingSecondPageText1>
                  CLAIM REWARDS
                </Styles.LandingSecondPageText1>
                <Styles.LandingSecondPageText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Styles.LandingSecondPageText2>
                <Styles.LandingSecondPageText3>
                  VIEW REWARDS
                </Styles.LandingSecondPageText3>
              </Styles.LandingPageTextWrapper>
            </Styles.LandingSecondPageChildSubContainer>
          </Styles.LandingSecondPageChildContainer>
        </Styles.LandingSecondPageContainer>
      </Styles.LandingPageContainer>
    </div>
  );
};

export default Home;
