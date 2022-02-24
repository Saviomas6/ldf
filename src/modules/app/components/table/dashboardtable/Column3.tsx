import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import tableup from "../../../../../assets/images/tableup.svg";
import tabledown from "../../../../../assets/images/tabledown.svg";
import ThreeDot from "../../../../../shared/components/threedotmodal";
export const COLUMNS3 = [
  {
    Header: "Nodes Name",
    accessor: "node_name",
    Cell: ({ row }: any) => (
      <SharedStyles.ColumnFirstHeader>
        <SharedStyles.DashboardImageIcon src={avataricon} alt="avatar" />

        <div>{row.values.node_name}</div>
      </SharedStyles.ColumnFirstHeader>
    ),
  },
  {
    Header: "Pool Name",
    accessor: "pool_name",
    disableSortBy: true,
  },
  {
    Header: "Loan ID",
    accessor: "loan_id",
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
    Header: "Interest Rate%",
    accessor: "interest_rate",
    disableSortBy: true,
  },
  {
    Header: "Borrow Amount",
    accessor: "borrow_amount",
    disableSortBy: true,
  },
  {
    Header: "Borrowed Date",
    accessor: "borrowed_date",
    disableSortBy: true,
  },
  {
    Header: "Due Date",
    accessor: "due_date",
    disableSortBy: true,
  },
  {
    Header: "Loan Extension",
    accessor: "loan_extension",
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
