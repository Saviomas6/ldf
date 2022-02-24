import React from "react";
import ReactTable from "../../shared/components/table";
import { COLUMNS1 } from "../app/components/table/dashboardtable/Column1";
import Data1 from "../app/components/table/dashboardtable/data1.json";
import { COLUMNS2 } from "../app/components/table/dashboardtable/Column2";
import Data2 from "../app/components/table/dashboardtable/data2.json";
import { COLUMNS3 } from "../app/components/table/dashboardtable/Column3";
import Data3 from "../app/components/table/dashboardtable/data3.json";

const Dashboard = () => {
  const renderRowSubComponent4 = React.useCallback(
    ({ row }) => <div>Hello</div>,
    []
  );

  return (
    <div>
      <ReactTable
        column_header={COLUMNS1}
        column_data={Data1}
        table_header="NODE NAME:DHARMA"
        search_bar={false}
        dashboardtext={true}
        dashboardrighttext={true}
        renderRowSubComponent={renderRowSubComponent4}
      />
      <ReactTable
        column_header={COLUMNS1}
        column_data={Data1}
        table_header="NODE NAME:DHARMA"
        search_bar={false}
        dashboardtext={true}
        dashboardrighttext={true}
        renderRowSubComponent={renderRowSubComponent4}
      />
      <ReactTable
        column_header={COLUMNS2}
        column_data={Data2}
        table_header="LEND"
        search_bar={false}
        dashboardtext={false}
        dashboardrighttext={false}
        renderRowSubComponent={renderRowSubComponent4}
      />
      <ReactTable
        column_header={COLUMNS3}
        column_data={Data3}
        table_header="BORROW"
        search_bar={false}
        dashboardtext={false}
        dashboardrighttext={false}
        renderRowSubComponent={renderRowSubComponent4}
      />
    </div>
  );
};

export default Dashboard;
