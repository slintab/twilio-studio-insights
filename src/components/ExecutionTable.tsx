import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Card } from "@twilio-paste/core/card";
import ExecutionTableRowContent from "./ExecutionTableRowContent";
import { StudioExecution } from "utils";

export default ({ data }: { data: StudioExecution[] }) => {
  const columns: TableColumn<StudioExecution>[] = [
    {
      name: "Execution Sid",
      selector: (row) => row.sid,
    },
    {
      name: "Start date",
      selector: (row) => row.start,
    },
    {
      name: "Caller",
      selector: (row) => row.caller,
    },
    {
      name: "Final step",
      selector: (row) => (row.finalStep ? row.finalStep : ""),
    },
    {
      name: "Steps",
      // array is only used in expandableRowsComponent, omitted from table
      //@ts-ignore
      selector: (row) => row.steps,
      omit: true,
    },
  ];

  return (
    <Card padding="space70">
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={ExecutionTableRowContent}
      />
    </Card>
  );
};
