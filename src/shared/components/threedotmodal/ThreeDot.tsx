import * as Styles from "./styles";
import threedot from "../../../assets/images/threedot.svg";
import closewhite from "../../../assets/images/closewhite.svg";
import { DPSecondButton } from "../button/Button";
const ThreeDot = (props: any) => {
  const { button1, button2, func1, func2, show, toggleModal } = props;
  return (
    <div>
      <Styles.ThreeDotImg
        onClick={() => toggleModal(true)}
        src={threedot}
        alt="threedot"
      />
      {show ? (
        <Styles.ThreeDotMainWrapper>
          <Styles.ThreeDotWrapper>
            <Styles.ThreeDotOuter>
              <Styles.ThreeDotOuterModalClose
                onClick={() => toggleModal(false)}
                src={closewhite}
                alt="close"
              />
              <Styles.ThreeDotOuterButtonWrapper>
                <DPSecondButton onClick={func1}>{button1}</DPSecondButton>
                <Styles.ThreeDotButton onClick={func2}>
                  {button2}
                </Styles.ThreeDotButton>
              </Styles.ThreeDotOuterButtonWrapper>
            </Styles.ThreeDotOuter>
          </Styles.ThreeDotWrapper>
        </Styles.ThreeDotMainWrapper>
      ) : null}
    </div>
  );
};

export default ThreeDot;
