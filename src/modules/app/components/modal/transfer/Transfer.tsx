import { Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TStore } from "../../../../../logic/store/store";
import { Button } from "../../../../../shared/components/button";
import close from "../../../../../assets/images/close.svg";
import { ErrorMessageComp } from "../../../../../shared/components/errorfield/ErrorField";
import * as SharedStyles from "../../../../../shared/styles/styled";
import {
  InputTextFieldLP,
  validationSchema,
} from "../../../../../shared/components/inputfield/InputText";
import { useNavigate } from "react-router-dom";
import ldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/ldfbond.json";
import usdcbond from "../../../../blockchain/contracts/LiquidityProvider/abi/usdcbond.json";
import nldfbond from "../../../../blockchain/contracts/LiquidityProvider/abi/nldfbond.json";
import {
  ldfbondaddress,
  nldfbondaddress,
  usdcbondaddress,
} from "../../../../blockchain/contracts/LiquidityProvider/address/address";
import { useWeb3React } from "@web3-react/core";
import loader from "../../../../../assets/images/loader.svg";
import { Logger } from "../mint/Mint";
import useLocalStorage from "../../../../../utils/hooks";
interface Values {
  amount: number | undefined;
}

const Transfer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { account, library } = useWeb3React();
  const [name] = useLocalStorage("nameofpairs", "");
  const navigate = useNavigate();
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
  const initialValues: Values = {
    amount: 0,
  };

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

  const onSubmit = async (values: Values) => {
    try {
      const bondinstance = new library.eth.Contract(
        TokenAbi(name)[0],
        TokenAbi(name)[1]
      );
      const value = library.utils.toWei(String(values.amount), "ether");
      setLoading(true);
      const result = await bondinstance.methods
        .deposit(value, 1200, account)
        .send({ from: account });
      console.log(result.code);
      if (result) {
        setLoading(false);
        alert("You can claim after 5 days");
        navigate("/liquidity");
      }
    } catch (error) {
      console.log(error);
      if (error) {
        setLoading(false);
        alert("Transaction Failed");
        navigate("/liquidity");
      }
    }
  };
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
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
                          setFieldValue("amount", lpbalance);
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
                          TRANSFER
                          <SharedStyles.Spinner src={loader} alt="spinner" />
                        </Button>
                      </>
                    ) : (
                      <Button type="submit">TRANSFER</Button>
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
                        TRANSFER
                        <SharedStyles.Spinner src={loader} alt="spinner" />
                      </SharedStyles.LPResponsiveButton>
                    </>
                  ) : (
                    <SharedStyles.LPResponsiveButton type="submit">
                      TRANSFER
                    </SharedStyles.LPResponsiveButton>
                  )}
                </SharedStyles.LPResizeButton1>
              </SharedStyles.LPModalContainer>
            </SharedStyles.CustomModal1>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Transfer;
