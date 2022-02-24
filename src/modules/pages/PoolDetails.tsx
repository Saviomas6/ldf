import React from "react";
import NodeDetails from "../app/components/nodedetails";
import ReactTable from "../../shared/components/table";
import Data from "../app/components/table/poollisttable/data.json";
import { COLUMNS } from "../app/components/table/poollisttable/Column";

const PoolDetails = () => {
  const renderRowSubComponent1 = React.useCallback(
    ({ row }) => <div>Hello</div>,
    []
  );
  return (
    <div>
      <NodeDetails />
      <ReactTable
        column_header={COLUMNS}
        column_data={Data}
        table_header="LIST OF POOL"
        search_bar={true}
        dashboardtext={false}
        dashboardrighttext={false}
        renderRowSubComponent={renderRowSubComponent1}
      />
    </div>
  );
};

export default PoolDetails;
