import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import { Link } from "react-router-dom";
export const COLUMNS = [
  {
    Header: "Nodes Name",
    accessor: "node_name",
    Cell: ({ row }: any) => (
      <SharedStyles.ColumnFirstHeader>
        <SharedStyles.DashboardImageIcon src={avataricon} alt="avatar" />

        <span>{row.values.node_name}</span>
      </SharedStyles.ColumnFirstHeader>
    ),
  },
  {
    Header: "Number of Pool",
    accessor: "number_of_pool",
    disableSortBy: true,
  },
  {
    Header: "Total Lender",
    accessor: "total_lender",
    disableSortBy: true,
  },
  {
    Header: "Market size",
    accessor: "market_size",
    disableSortBy: true,
  },
  {
    Header: "Total borrowed",
    accessor: "total_borrowed",
    disableSortBy: true,
  },
  {
    Header: "Total borrowed",
    accessor: "total_borrowers",
    disableSortBy: true,
  },
  {
    Header: "",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <Link to="/pool/pooldetails">
        <SharedStyles.DashboardViewButton>
          View
        </SharedStyles.DashboardViewButton>
      </Link>
    ),
  },
];
