import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import tableup from "../../../../../assets/images/tableup.svg";
import tabledown from "../../../../../assets/images/tabledown.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useLocalStorage from "../../../../../utils/hooks";
import Wallet from "../../../../../shared/components/walletconnect";
import ThreeDot from "../../../../../shared/components/threedotmodal";

export const COLUMNS = [
  {
    Header: "Name of Pairs",
    accessor: "name_of_pairs",
    Cell: ({ row }: any) => (
      <SharedStyles.ColumnFirstHeader1>
        <SharedStyles.DashboardImageIcon src={avataricon} alt="avatar" />
        <span>{row.values.name_of_pairs}</span>
      </SharedStyles.ColumnFirstHeader1>
    ),
  },
  {
    Header: "Market size",
    accessor: "market_size",
    disableSortBy: true,
  },
  {
    Header: "ROI",
    accessor: "roi",
    Cell: ({ row }: any) => (
      <div>
        <span>{row.values.roi}</span>
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? (
            <SharedStyles.TableDownUpArrow src={tableup} alt="arrowdown" />
          ) : (
            <SharedStyles.TableDownUpArrow src={tabledown} alt="arrowdown" />
          )}
        </span>
      </div>
    ),
  },
  {
    Header: "Purchased",
    accessor: "purchased",
    disableSortBy: true,
  },
  {
    Header: "",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => {
      const navigate = useNavigate();
      const { active } = useWeb3React();
      const [name, setName] = useLocalStorage("nameofpairs", "");
      const [modalOpen, setModalOpen] = useState<boolean>(false);
      const [threedotmodal, setThreeDotModal] = useState<boolean>(false);
      const MintFunc = () => {
        if (active) {
          navigate("/mint");
          setThreeDotModal(false);
          setName(row.values.name_of_pairs);
        } else {
          setModalOpen(true);
          setThreeDotModal(false);
        }
      };
      const ClaimFunc = () => {
        if (active) {
          navigate("/claimldf");
          setThreeDotModal(false);
          setName(row.values.name_of_pairs);
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
              button1="Mint"
              button2="Claim"
              func1={MintFunc}
              func2={ClaimFunc}
              show={threedotmodal}
              toggleModal={setThreeDotModal}
            />
          </SharedStyles.ThreeDotMainContainer>
        </>
      );
    },
  },
];
