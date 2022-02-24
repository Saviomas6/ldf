import React from "react";
import Dashboard from "../app/components/dashboard";
import { COLUMNS } from "../app/components/table/nodeoperatortable/Column";
import ReactTable from "../../shared/components/table";
import Data from "../app/components/table/nodeoperatortable/data.json";

const Pool = () => {
  const renderRowSubComponent2 = React.useCallback(
    ({ row }) => <div>Hello</div>,
    []
  );
  return (
    <div>
      <Dashboard />
      <ReactTable
        column_header={COLUMNS}
        column_data={Data}
        table_header="LIST OF NODES OPERATOR"
        search_bar={true}
        dashboardtext={false}
        dashboardrighttext={false}
        renderRowSubComponent={renderRowSubComponent2}
      />
    </div>
  );
};

export default Pool;
