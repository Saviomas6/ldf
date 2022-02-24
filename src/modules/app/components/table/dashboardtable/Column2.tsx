import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import tableup from "../../../../../assets/images/tableup.svg";
import tabledown from "../../../../../assets/images/tabledown.svg";
import ThreeDot from "../../../../../shared/components/threedotmodal";
export const COLUMNS2 = [
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
    Header: "Pool Name",
    accessor: "pool_name",
    disableSortBy: true,
  },
  {
    Header: "Interest Rate%",
    accessor: "interest_rate",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <div>
        <span>{row.values.interest_rate}</span>
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
    Header: "Deposit Amount",
    accessor: "deposit_amount",
    disableSortBy: true,
  },
  {
    Header: "",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <SharedStyles.ThreeDotMainContainer>
        <ThreeDot />
      </SharedStyles.ThreeDotMainContainer>
    ),
  },
];
