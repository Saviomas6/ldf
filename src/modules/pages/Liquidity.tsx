import React, { useState } from "react";
import LiquidityProvider from "../app/components/liquidityprovider";
import ReactTable from "../../shared/components/table";
import Data from "../app/components/table/liquidityprovidertable/data.json";
import { COLUMNS } from "../app/components/table/liquidityprovidertable/Column";
import {
  LiquidityExtendedContainer,
  LiquidityExtendedSub1,
  LiquidityExtendedSub1Text1,
  LiquidityExtendedSub1Text2,
  LiquidityExtendedSub2,
} from "./styles";
import * as SharedStyles from "../../shared/styles/styled";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../utils/hooks";
import { useWeb3React } from "@web3-react/core";
import Wallet from "../../shared/components/walletconnect";
const Liquidity = () => {
  const navigate = useNavigate();
  const { active } = useWeb3React();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [name, setName] = useLocalStorage("nameofpairs", "");
  const renderRowSubComponent3 = React.useCallback(
    ({ row }) => (
      <div>
        {modalOpen && <Wallet show={modalOpen} toggleModal={setModalOpen} />}
        <LiquidityExtendedContainer>
          <LiquidityExtendedSub1>
            <LiquidityExtendedSub1Text1>Purchased</LiquidityExtendedSub1Text1>
            <LiquidityExtendedSub1Text2>
              {row.values.purchased}
            </LiquidityExtendedSub1Text2>
          </LiquidityExtendedSub1>
          <LiquidityExtendedSub2>
            <SharedStyles.KycButton
              onClick={() => {
                if (active) {
                  navigate("/mint");
                  setName(row.values.name_of_pairs);
                } else {
                  setModalOpen(true);
                }
              }}
            >
              Mint
            </SharedStyles.KycButton>
            <SharedStyles.KycResButton1
              onClick={() => {
                if (active) {
                  navigate("/claimldf");
                  setName(row.values.name_of_pairs);
                } else {
                  setModalOpen(true);
                }
              }}
            >
              Claim
            </SharedStyles.KycResButton1>
          </LiquidityExtendedSub2>
        </LiquidityExtendedContainer>
      </div>
    ),
    [active, modalOpen]
  );
  return (
    <div>
      <LiquidityProvider />
      <ReactTable
        column_header={COLUMNS}
        column_data={Data}
        table_header="LIST OF TRADING PAIRS"
        search_bar={true}
        dashboardtext={false}
        dashboardrighttext={false}
        renderRowSubComponent={renderRowSubComponent3}
      />
    </div>
  );
};

export default Liquidity;
