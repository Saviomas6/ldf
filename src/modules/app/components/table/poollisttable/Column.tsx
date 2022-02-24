import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import ThreeDot from "../../../../../shared/components/threedotmodal";
import Wallet from "../../../../../shared/components/walletconnect";
import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
export const COLUMNS = [
  {
    Header: "Name of Pool",
    accessor: "name_of_pool",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <SharedStyles.ColumnFirstHeader>
        <SharedStyles.DashboardImageIcon src={avataricon} alt="avatar" />

        <div>{row.values.name_of_pool}</div>
      </SharedStyles.ColumnFirstHeader>
    ),
  },
  {
    Header: "Market Size",
    accessor: "market_size",
    disableSortBy: true,
  },
  {
    Header: "Interest Rate%",
    accessor: "interest_rate",
    disableSortBy: true,
  },
  {
    Header: "Total Borrowed",
    accessor: "total_borrowed",
    disableSortBy: true,
  },
  {
    Header: "Default Payment",
    accessor: "default_payment",
    disableSortBy: true,

    Cell: ({ row }: any) => (
      <SharedStyles.DashboardNumberButton>
        {row.values.default_payment}
      </SharedStyles.DashboardNumberButton>
    ),
  },
  {
    Header: "",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => {
      const { active } = useWeb3React();
      const [modalOpen, setModalOpen] = useState<boolean>(false);
      const [threedotmodal, setThreeDotModal] = useState<boolean>(false);
      const DepositFunc = () => {
        if (active) {
          alert("Deposit");
          setThreeDotModal(false);
        } else {
          setModalOpen(true);
          setThreeDotModal(false);
        }
      };
      const BorrowFunc = () => {
        if (active) {
          alert("Borrow");
          setThreeDotModal(false);
        } else {
          setModalOpen(true);
          setThreeDotModal(false);
        }
      };
      return (
        <>
          {modalOpen && <Wallet show={modalOpen} toggleModal={setModalOpen} />}
          <SharedStyles.ThreeDotMainContainer>
            <ThreeDot
              button1="Deposit"
              button2="Borrow"
              func1={DepositFunc}
              func2={BorrowFunc}
              show={threedotmodal}
              toggleModal={setThreeDotModal}
            />
          </SharedStyles.ThreeDotMainContainer>
        </>
      );
    },
  },
];
