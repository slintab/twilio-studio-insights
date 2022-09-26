import React from "react";
import { Grid, Column } from "@twilio-paste/core/grid";
import { Heading } from "@twilio-paste/core/heading";
import ExecutionCards from "./ExecutionCards";
import ExecutionDashboard from "./ExecutionDashboard";
import ExecutionTable from "./ExecutionTable";
import { StudioExecution } from "utils";

export default ({ reportData }: { reportData: StudioExecution[] }) => {
  return (
    <Grid gutter="space30" vertical>
      <Column span={12}>
        <ExecutionCards data={reportData} />
      </Column>
      <Column span={12}>
        <Heading as="h3" variant="heading30">
          Dashboard
        </Heading>
        <ExecutionDashboard data={reportData} />
      </Column>
      <Column span={12}>
        <Heading as="h3" variant="heading30">
          Executions
        </Heading>
        <ExecutionTable data={reportData} />
      </Column>
    </Grid>
  );
};
