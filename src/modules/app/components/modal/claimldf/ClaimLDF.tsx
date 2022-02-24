import { CustomModal1 } from "../../../../../shared/styles/styled";
import * as Styles from "./styles";
import * as SharedStyles from "../../../../../shared/styles/styled";
import { ButtonWrapper, Button } from "../../../../../shared/components/button";
import close from "../../../../../assets/images/close.svg";
import { useNavigate } from "react-router-dom";
import {
  ldfbondaddress,
  nldfbondaddress,
  usdcbondaddress,
} from "../../../../blockchain/contracts/LiquidityProvider/address/address";
import ldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/ldfbond.json";
import usdcbond from "../../../../blockchain/contracts/LiquidityProvider/abi/usdcbond.json";
import nldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/nldfbond.json";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import loader from "../../../../../assets/images/loader.svg";
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "../../../../../logic/store/store";
import {
  ClaimableReward,
  PendingReward,
  TimeUntillFully,
} from "../../../../../logic/reducer/reducer";
import useLocalStorage from "../../../../../utils/hooks";

const ClaimLDF = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [vesting, setVesting] = useState(0);
  const [percentvest, setPercentVest] = useState(0);
  const [timeuntillfullystate, settimeuntillfullystate] = useState(0);
  const { account, library } = useWeb3React();
  const [name] = useLocalStorage("nameofpairs", "");
  const dispatch = useDispatch();
  const claimablerewards = useSelector(
    (state: TStore) => state.counter.claimableRewardsvalue
  );
  const pendingrewards = useSelector(
    (state: TStore) => state.counter.pendingRewardValue
  );
  const timeuntillfully = useSelector(
    (state: TStore) => state.counter.timeuntillfullyvestedvalue
  );

  const TokenAbi = (name: string) => {
    switch (name) {
      case "LDF/USDT LP":
        return [usdcbond.abi, usdcbondaddress];
      case "LDF/USDC LP":
        return [ldfbond.abi, ldfbondaddress];
      case "USDC LP":
        return [nldfbond.abi, nldfbondaddress];
      default:
        return "";
    }
  };

  const ClaimableRewards = async () => {
    try {
      const bondinstance = new library.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const result = await bondinstance.methods
        .pendingPayoutFor(account)
        .call();
      const value = library.utils.fromWei(result, "ether");
      const numberConvert = parseFloat(value);
      const fixedDecimal = numberConvert.toFixed(4);
      const stringtoNumber = parseFloat(fixedDecimal);
      dispatch(ClaimableReward(stringtoNumber));
    } catch (error) {
      console.log(error);
    }
  };
  ClaimableRewards();

  const PendingRewards = async () => {
    try {
      const bondinstance = new library.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const result = await bondinstance.methods.bondInfo(account).call();
      const value = library.utils.fromWei(result.payout, "ether");
      const numberConvert = parseFloat(value);
      const fixedDecimal = numberConvert.toFixed(4);
      const stringtoNumber = parseFloat(fixedDecimal);
      if (stringtoNumber || stringtoNumber === 0) {
        const value = stringtoNumber - claimablerewards;
        const fixedDecimal = value.toFixed(4);
        const stringtoNum = parseFloat(fixedDecimal);
        dispatch(PendingReward(stringtoNum));
      }
    } catch (error) {
      console.log(error);
    }
  };
  PendingRewards();

  const TimeUntilFullyVested = async () => {
    try {
      let vestingBlockperDay: number = 6646.15;
      const bondinstance = new library.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const result = await bondinstance.methods.terms().call();
      const bondinfo = await bondinstance.methods.bondInfo(account).call();
      const currentblock = await library.eth.getBlockNumber();
      const lastblock = bondinfo.lastBlock;
      const vestingtermcal = bondinfo.vesting;
      const vestingTerm = result.vestingTerm;
      const percentVestedresult = await bondinstance.methods
        .percentVestedFor(account)
        .call();
      const convettonum = parseFloat(percentVestedresult);
      setPercentVest(convettonum);
      const timeuntilfullvestedvalue = vestingTerm / vestingBlockperDay;
      const roundedvesting = Math.round(timeuntilfullvestedvalue);
      setVesting(roundedvesting);
      const value = currentblock - lastblock;
      if (value || value === 0) {
        const timeuntilfullvestedvalue =
          (vestingtermcal - value) / vestingBlockperDay;
        settimeuntillfullystate(timeuntilfullvestedvalue);
        const roundedTimeuntilvalue = Math.round(timeuntilfullvestedvalue);
        dispatch(TimeUntillFully(roundedTimeuntilvalue));
      }
    } catch (error) {
      console.log(error);
    }
  };
  TimeUntilFullyVested();

  const onSubmit = async () => {
    try {
      if (percentvest >= 10000) {
        const bondinstance = new library.eth.Contract(
          TokenAbi(name)[0],
          TokenAbi(name)[1]
        );
        setLoading(true);
        const result = await bondinstance.methods
          .redeem(account)
          .send({ from: account });
        if (result) {
          alert("You have claimed the amount");
          setLoading(false);
          navigate("/liquidity");
        }
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        alert("Transaction Failed");
        navigate("/liquidity");
      }
    }
  };
  return (
    <div>
      <CustomModal1>
        <Styles.ClaimLDFModalContainer>
          <SharedStyles.ModalHeadingWrapper>
            <SharedStyles.ModalHeading>CLAIM LDF</SharedStyles.ModalHeading>
            <SharedStyles.ModalClose
              onClick={() => {
                navigate("/liquidity");
              }}
              src={close}
              alt="close"
            />
          </SharedStyles.ModalHeadingWrapper>
          <Styles.ClaimLDFContentWrapper>
            <SharedStyles.LPContentWrapper>
              <SharedStyles.LPLeftCont>
                <SharedStyles.LPList>Pending Rewards</SharedStyles.LPList>
                <SharedStyles.LPList>Claimable Rewards</SharedStyles.LPList>
                <SharedStyles.LPList>
                  Time Until Fully Vested
                </SharedStyles.LPList>
                <SharedStyles.LPList>ROI</SharedStyles.LPList>
                <SharedStyles.LPList>Vesting Term</SharedStyles.LPList>
              </SharedStyles.LPLeftCont>
              <SharedStyles.LPLeftCont>
                <SharedStyles.LPList>
                  : {pendingrewards} LDF
                </SharedStyles.LPList>
                <SharedStyles.LPList>
                  : {claimablerewards} LDF
                </SharedStyles.LPList>
                <SharedStyles.LPList>
                  :
                  {timeuntillfullystate <= 0
                    ? ` Fully Vested`
                    : ` ${timeuntillfully} Days`}
                </SharedStyles.LPList>
                <SharedStyles.LPList>: 6.80%</SharedStyles.LPList>
                <SharedStyles.LPList>: {vesting} Days</SharedStyles.LPList>
              </SharedStyles.LPLeftCont>
            </SharedStyles.LPContentWrapper>
            <ButtonWrapper>
              {loading ? (
                <>
                  <Button type="button">
                    CLAIM REWARD
                    <SharedStyles.Spinner src={loader} alt="spinner" />
                  </Button>
                </>
              ) : (
                <Button
                  disabled={percentvest >= 10000 ? false : true}
                  onClick={onSubmit}
                >
                  CLAIM REWARD
                </Button>
              )}
            </ButtonWrapper>
          </Styles.ClaimLDFContentWrapper>
        </Styles.ClaimLDFModalContainer>
      </CustomModal1>
    </div>
  );
};

export default ClaimLDF;
