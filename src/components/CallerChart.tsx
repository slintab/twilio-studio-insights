import React from "react";
import * as _ from "lodash";
import { TabPanel } from "@twilio-paste/core/tabs";
import { Heading } from "@twilio-paste/core/heading";
import { StudioExecution } from "utils";
import { CallerRank } from "types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getTopCallers(data: StudioExecution[]) {
  const callers = _.groupBy(data, (i) => i.caller);
  let result: CallerRank[] = [];

  for (const [caller, executions] of Object.entries(callers)) {
    result.push({ caller: caller, cnt: executions.length });
  }

  return result.sort((a, b) => b.cnt - a.cnt).slice(0, 5);
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <TabPanel>
      <Heading as="h4" variant="heading30">
        Top callers
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={getTopCallers(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="caller" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </TabPanel>
  );
};
