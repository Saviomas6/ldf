import { useState } from "react";
import * as Styles from "./styles";
import { DashBoardButton } from "../../../../shared/components/button";
import BankingNode from "../modal/bankingnodesetup";
import AddStake from "../modal/addstake";
import PoolCreation from "../modal/poolcreation";
interface DashboardDetails {
  title: string;
  no_of_pools: string;
  totalLDF: string;
  pool_number: string;
  ldf_number: string;
  createNode?: string;
}
const DashboardData: DashboardDetails[] = [
  {
    title: "BANKING NODES",
    no_of_pools: "No of Pool",
    totalLDF: "Total LDF",
    pool_number: "02",
    ldf_number: "1 M LDF",
    createNode: "Create Banking Node",
  },
  {
    title: "LENDERS",
    no_of_pools: "No of Pool",
    totalLDF: "Total Deposit USDT",
    pool_number: "00",
    ldf_number: "1 M LDF",
  },
  {
    title: "BORROWER",
    no_of_pools: "Total Borrow Amount",
    totalLDF: "Total Deposit Collateral",
    pool_number: "00",
    ldf_number: "1 M LDF",
  },
];

const Dashboard = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <div>
      {page === 1 && <BankingNode setPage={setPage} />}
      {page === 2 && (
        <AddStake setPage={setPage} threedot={true} nextpage={true} />
      )}
      {page === 3 && (
        <PoolCreation setPage={setPage} threedot={true} nextpage={true} />
      )}

      <Styles.DashboardFirstContainer>
        {DashboardData.map((ele: DashboardDetails, i: number) => {
          return (
            <Styles.BLBContainer key={i}>
              <Styles.BLBSubContainer>
                <Styles.BankingNodeSubContainer1>
                  {ele.title}
                </Styles.BankingNodeSubContainer1>
                <Styles.BankingNodeSubContainer2>
                  <div>
                    <p style={{ color: "#637DB5" }}>{ele.no_of_pools}&nbsp;</p>
                    <p style={{ color: "#637DB5" }}>{ele.totalLDF}&nbsp;</p>
                  </div>
                  <div>
                    <p>: {ele.pool_number}</p>
                    <p>: {ele.ldf_number}</p>
                  </div>
                </Styles.BankingNodeSubContainer2>
                <Styles.BankingNodeSubContainer3>
                  <Styles.CBNLink onClick={() => setPage(1)}>
                    {ele.createNode}
                  </Styles.CBNLink>
                  <Styles.DashBoardButtonWrapper>
                    <DashBoardButton>View</DashBoardButton>
                  </Styles.DashBoardButtonWrapper>
                </Styles.BankingNodeSubContainer3>
              </Styles.BLBSubContainer>
            </Styles.BLBContainer>
          );
        })}
      </Styles.DashboardFirstContainer>
    </div>
  );
};

export default Dashboard;
