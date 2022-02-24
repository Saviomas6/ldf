import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useExpanded,
  useRowSelect,
} from "react-table";
import SearchBar from "../searchbar";
import * as Styles from "./styles";
interface Iprops {
  column_header: any;
  column_data: any;
  table_header: string;
  search_bar: boolean;
  dashboardtext: boolean;
  dashboardrighttext: boolean;
  renderRowSubComponent: ({ row }: any) => any;
}
const ReactTable = ({
  column_header,
  column_data,
  table_header,
  search_bar,
  dashboardtext,
  dashboardrighttext,
  renderRowSubComponent,
}: Iprops) => {
  const columns = useMemo(
    () => column_header,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const data = useMemo(
    () => column_data,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    setGlobalFilter,
    rows,
    prepareRow,
    visibleColumns,
  }: any = useTable<any>(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const { globalFilter } = state;

  return (
    <Styles.MainWrapper>
      <Styles.Wrapper>
        <Styles.TableHeaderWrapper>
          <div>
            <Styles.TableHeaderText dashboardtext={dashboardtext}>
              {table_header}
            </Styles.TableHeaderText>
          </div>
          {dashboardrighttext ? (
            <div>
              <Styles.DashboardHeaderOption1>
                TOTAL LIQUIDITY
              </Styles.DashboardHeaderOption1>
              <Styles.DashboardHeaderOption2>
                $ 1245,256,8954,000.0
              </Styles.DashboardHeaderOption2>
            </div>
          ) : null}

          {search_bar ? (
            <div>
              <SearchBar
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </div>
          ) : null}
        </Styles.TableHeaderWrapper>
        <Styles.Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any, i: number) => (
              <Styles.TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any, i: number) => (
                  <Styles.TableHeader1 key={i} {...column.getHeaderProps()}>
                    {column.render("Header")}
                    {/* <span>
                      {column.Header !== "Nodes Name" ||
                      column.Header !== "Name of Pool" ? (
                        ""
                      ) : column.isSorted ? (
                        <SharedStyles.DownArrow src={downarrow} alt="arrow" />
                      ) : (
                        <SharedStyles.DownArrow src={downarrow} alt="arrow" />
                      )}
                    </span> */}
                  </Styles.TableHeader1>
                ))}
              </Styles.TableRow>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any, i: number) => {
              prepareRow(row);
              return (
                <React.Fragment key={i}>
                  <Styles.TableRow {...row.getRowProps()}>
                    {row.cells.map((cell: any, i: number) => {
                      return (
                        <Styles.TableData key={i} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </Styles.TableData>
                      );
                    })}
                  </Styles.TableRow>
                  {row.isExpanded ? (
                    <Styles.ExtendedTableRow>
                      <td colSpan={visibleColumns.length}>
                        {renderRowSubComponent({ row })}
                      </td>
                    </Styles.ExtendedTableRow>
                  ) : null}
                </React.Fragment>
              );
            })}
          </tbody>
        </Styles.Table>
      </Styles.Wrapper>
    </Styles.MainWrapper>
  );
};

export default ReactTable;
