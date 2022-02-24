import * as SharedStyles from "../../../../../shared/styles/styled";
import avataricon from "../../../../../assets/images/avataricon.svg";
import tableup from "../../../../../assets/images/tableup.svg";
import tabledown from "../../../../../assets/images/tabledown.svg";
import ThreeDot from "../../../../../shared/components/threedotmodal";
export const COLUMNS1 = [
  {
    Header: "Name of Pool",
    accessor: "name_of_pool",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <SharedStyles.ColumnFirstHeader>
        <SharedStyles.DashboardImageIcon src={avataricon} alt="avatar" />

        <span>{row.values.name_of_pool}</span>
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
    Header: "Variable APY",
    accessor: "variable_apy",
    disableSortBy: true,
  },
  {
    Header: "Total Borrowed",
    accessor: "total_borrowed",
    disableSortBy: true,
  },
  {
    Header: "Loan Request",
    accessor: "loan_request",
    disableSortBy: true,

    Cell: ({ row }: any) => (
      <SharedStyles.DashboardNumberButton>
        {row.values.loan_request}
      </SharedStyles.DashboardNumberButton>
    ),
  },
  {
    Header: "Loan Extension",
    accessor: "loan_extension",
    disableSortBy: true,

    Cell: ({ row }: any) => (
      <SharedStyles.DashboardNumberButton>
        {row.values.loan_extension}
      </SharedStyles.DashboardNumberButton>
    ),
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
    Cell: ({ row }: any) => (
      <SharedStyles.ThreeDotMainContainer>
        <ThreeDot />
      </SharedStyles.ThreeDotMainContainer>
    ),
  },
];
