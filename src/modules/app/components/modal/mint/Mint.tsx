import close from "../../../../../assets/images/close.svg";
import * as SharedStyles from "../../../../../shared/styles/styled";
import { Button } from "../../../../../shared/components/button";
import { Form, Formik, useFormikContext } from "formik";
import {
  InputTextFieldLP,
  validationSchema,
} from "../../../../../shared/components/inputfield/InputText";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useSelector, useDispatch } from "react-redux";
import ldftoken from "../../../../blockchain/contracts/LiquidityProvider/abi/ldftoken.json";
import usdcbond from "../../../../blockchain/contracts/LiquidityProvider/abi/usdcbond.json";
import usdctoken from "../../../../blockchain/contracts/LiquidityProvider/abi/usdctoken.json";
import ldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/ldfbond.json";
import nldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/nldfbond.json";
import {
  ldfbondaddress,
  usdcbondaddress,
  usdctokenaddress,
  treasuryaddress,
  ldftokenaddress,
  nldfbondaddress,
} from "../../../../blockchain/contracts/LiquidityProvider/address/address";
import { TStore } from "../../../../../logic/store/store";
import treasury from "../../../../blockchain/contracts/LiquidityProvider/abi/treasury.json";
import {
  LPBalance,
  MaxYouCanBuy,
  VestingTerms,
  YouWillGeting,
} from "../../../../../logic/reducer/reducer";
import { useEffect, useState } from "react";
import loader from "../../../../../assets/images/loader.svg";
import web3 from "../../../../blockchain/web3";
import useLocalStorage from "../../../../../utils/hooks";
interface Values {
  amount: number | undefined;
}
const initialValues: Values = {
  amount: 0,
};

interface Iprops {
  setTransferToogle(value: boolean): void;
}
export const Logger = () => {
  const dispatch = useDispatch();
  const web3React = useWeb3React();
  const { library } = web3React;
  const { values }: any = useFormikContext();
  useEffect(() => {
    const YouWillGet = async () => {
      try {
        const treasuryinstance = new library.eth.Contract(
          treasury.abi,
          treasuryaddress
        );
        const bondinstance = new library.eth.Contract(
          ldfbond.abi,
          ldfbondaddress
        );
        const value = library.utils.toWei(String(values.amount), "ether");
        const result: number = await treasuryinstance.methods
          .valueOf(ldftokenaddress, value)
          .call();
        if (result) {
          const payoutresult = await bondinstance.methods
            .payoutFor(result)
            .call();
          const value = library.utils.fromWei(payoutresult, "ether");
          const numberConvert = parseFloat(value);
          const fixedDecimal = numberConvert.toFixed(4);
          const stringtoNumConvert = parseFloat(fixedDecimal);
          dispatch(YouWillGeting(stringtoNumConvert));
        }
      } catch (error) {
        console.log(error);
      }
    };
    YouWillGet();
  }, [values]);
  return null;
};
const Mint = ({ setTransferToogle }: Iprops) => {
  const navigate = useNavigate();
  const web3React = useWeb3React();
  const { account, library, active } = web3React;
  const [name] = useLocalStorage("nameofpairs", "");
  const [loading, setLoading] = useState<boolean>(false);

  const lpbalance = useSelector(
    (state: TStore) => state.counter.LPBalancevalue
  );
  const maxyoucanbuy = useSelector(
    (state: TStore) => state.counter.MaxYouCanBuyValue
  );
  const vestingterm = useSelector(
    (state: TStore) => state.counter.vestingTermValue
  );
  const youwillget = useSelector(
    (state: TStore) => state.counter.youwillgetvalue
  );
  const dispatch = useDispatch();

  const TokenAbi = (name: string) => {
    switch (name) {
      case "LDF/USDT LP":
        return [usdcbond.abi, usdcbondaddress, usdctoken.abi, usdctokenaddress];
      case "LDF/USDC LP":
        return [ldfbond.abi, ldfbondaddress, ldftoken.abi, ldftokenaddress];
      case "USDC LP":
        return [nldfbond.abi, nldfbondaddress, ldftoken.abi, ldftokenaddress];
      default:
        return [];
    }
  };

  const FetchLPBalance = async () => {
    try {
      const tokeninstance = new library.eth.Contract(
        TokenAbi(name)[2],
        TokenAbi(name)[3]
      );
      const result: number = await tokeninstance.methods
        .balanceOf(account)
        .call();
      const value: number = library.utils.fromWei(result, "ether");
      dispatch(LPBalance(value));
    } catch (error) {
      console.log(error);
    }
  };

  FetchLPBalance();

  const MaxPayout = async () => {
    try {
      const tokeninstance = new web3.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const result = await tokeninstance.methods.maxPayout().call();
      const value = web3.utils.fromWei(result, "ether");
      const numberConvert = parseFloat(value);
      const fixedDecimal = numberConvert.toFixed(4);
      const stringtoNumConvert = parseFloat(fixedDecimal);
      dispatch(MaxYouCanBuy(stringtoNumConvert));
    } catch (error) {
      console.log(error);
    }
  };

  MaxPayout();

  const VestingTerm = async () => {
    try {
      let blockperDay: number = 6646.15;
      const tokeninstance = new web3.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const result = await tokeninstance.methods.terms().call();
      const blockValue: number = result.vestingTerm;
      if (blockValue) {
        const blockinDays = blockValue / blockperDay;
        const RoundedinDays = Math.round(blockinDays);
        dispatch(VestingTerms(RoundedinDays));
      }
    } catch (error) {
      console.log(error);
    }
  };
  VestingTerm();

  const onSubmit = async (values: Values) => {
    if (active) {
      try {
        const tokeninstance = new library.eth.Contract(
          TokenAbi(name)[2],
          TokenAbi(name)[3]
        );
        const value = library.utils.toWei(String(values.amount), "ether");
        setLoading(true);
        const result = await tokeninstance.methods
          .approve(TokenAbi(name)[1], value)
          .send({ from: account });
        if (result.status) {
          setLoading(false);
          setTransferToogle(true);
        }
      } catch (error) {
        console.log(error);
        if (error) {
          alert("Transaction Failed");
          setLoading(false);
          navigate("/liquidity");
        }
      }
    } else {
      alert("Please connect your wallet");
    }
  };
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Logger />
            <SharedStyles.CustomModal1>
              <SharedStyles.LPModalContainer>
                <SharedStyles.ModalHeadingWrapper>
                  <SharedStyles.ModalHeading>MINT</SharedStyles.ModalHeading>
                  <SharedStyles.ModalClose
                    onClick={() => {
                      navigate("/liquidity");
                    }}
                    src={close}
                    alt="close"
                  />
                </SharedStyles.ModalHeadingWrapper>
                <SharedStyles.LPContent>
                  <SharedStyles.LPModalInputWrapper>
                    <InputTextFieldLP
                      id="mint"
                      type="number"
                      placeholder="Enter the amount"
                      name="amount"
                      label="Amount"
                    />

                    <SharedStyles.LPButtonWrapper>
                      <SharedStyles.LPInputButton
                        type="button"
                        onClick={() => {
                          props.setFieldValue("amount", lpbalance);
                        }}
                      >
                        MAX
                      </SharedStyles.LPInputButton>
                    </SharedStyles.LPButtonWrapper>
                    <ErrorMessageComp name="amount" />
                  </SharedStyles.LPModalInputWrapper>
                  <SharedStyles.LPTextWrapper>
                    <SharedStyles.Paragraph>
                      Note: The "Approve" transaction is only needed when
                      minting for the first time; subsequent minting only
                      requires you to perform the "Mint" transaction.
                    </SharedStyles.Paragraph>
                  </SharedStyles.LPTextWrapper>
                  <SharedStyles.LPResizeButton>
                    {loading ? (
                      <>
                        <Button type="submit">
                          APPROVE
                          <SharedStyles.Spinner src={loader} alt="spinner" />
                        </Button>
                      </>
                    ) : (
                      <Button type="submit">APPROVE</Button>
                    )}
                  </SharedStyles.LPResizeButton>

                  <SharedStyles.LPContentWrapper>
                    <SharedStyles.LPLeftCont>
                      <SharedStyles.LPList>Your Balance</SharedStyles.LPList>
                      <SharedStyles.LPList>You Will Get</SharedStyles.LPList>
                      <SharedStyles.LPList>Max You Can Buy</SharedStyles.LPList>
                      <SharedStyles.LPList>ROI</SharedStyles.LPList>
                      <SharedStyles.LPList>Vesting Term</SharedStyles.LPList>
                      <SharedStyles.LPList>
                        Minimum Purchase
                      </SharedStyles.LPList>
                    </SharedStyles.LPLeftCont>
                    <SharedStyles.LPLeftCont>
                      <SharedStyles.LPList>
                        : {lpbalance} LDF
                      </SharedStyles.LPList>
                      <SharedStyles.LPList>
                        {/* {youwillget >= 0.01 ? youwillget : "Error"}:{" "} */}
                        : {youwillget} LDF
                      </SharedStyles.LPList>
                      <SharedStyles.LPList>
                        : {maxyoucanbuy} LDF
                      </SharedStyles.LPList>
                      <SharedStyles.LPList>: 6.80%</SharedStyles.LPList>
                      <SharedStyles.LPList>
                        : {vestingterm} Days
                      </SharedStyles.LPList>
                      <SharedStyles.LPList>: 0.01 LDF</SharedStyles.LPList>
                    </SharedStyles.LPLeftCont>
                  </SharedStyles.LPContentWrapper>
                </SharedStyles.LPContent>
                <SharedStyles.LPResizeButton1>
                  {loading ? (
                    <>
                      <SharedStyles.LPResponsiveButton type="submit">
                        APPROVE
                        <SharedStyles.Spinner src={loader} alt="spinner" />
                      </SharedStyles.LPResponsiveButton>
                    </>
                  ) : (
                    <SharedStyles.LPResponsiveButton type="submit">
                      APPROVE
                    </SharedStyles.LPResponsiveButton>
                  )}
                </SharedStyles.LPResizeButton1>
              </SharedStyles.LPModalContainer>
            </SharedStyles.CustomModal1>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Mint;
