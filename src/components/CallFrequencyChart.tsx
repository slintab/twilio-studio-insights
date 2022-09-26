import React from "react";
import * as _ from "lodash";
import { TabPanel } from "@twilio-paste/core/tabs";
import { Heading } from "@twilio-paste/core/heading";
import { StudioExecution } from "utils";
import { CallDateFrequency } from "types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getCallFrequency(data: StudioExecution[]) {
  let callMap = new Map<string, number>();
  let result: CallDateFrequency[] = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const fmtD = d.toISOString().slice(0, 10);
    callMap.set(fmtD, 0);
  }

  const callsByDate = _.groupBy(data, (i) => {
    return new Date(i.start).toISOString().slice(0, 10);
  });

  for (const [date, executions] of Object.entries(callsByDate)) {
    if (!callMap.has(date)) {
      continue;
    }
    callMap.set(date, executions.length);
  }

  callMap.forEach((value, key) => {
    result.push({ date: key, cnt: value });
  });

  return result.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <TabPanel>
      <Heading as="h4" variant="heading30">
        Call frequency by day
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={getCallFrequency(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" interval={0} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </TabPanel>
  );
};
