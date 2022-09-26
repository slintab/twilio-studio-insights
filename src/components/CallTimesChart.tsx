import React from "react";
import * as _ from "lodash";
import { TabPanel } from "@twilio-paste/core/tabs";
import { Heading } from "@twilio-paste/core/heading";
import { StudioExecution } from "utils";
import { CallTimeFrequency } from "types";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

function getCallTimes(data: StudioExecution[]) {
  let callMap = new Map<string, number>();
  let result: CallTimeFrequency[] = [];

  for (let i = 0; i < 24; i++) {
    callMap.set(i.toString(), 0);
  }

  const callsByHour = _.groupBy(data, (i) => {
    return new Date(i.start).getHours();
  });

  for (const [hour, executions] of Object.entries(callsByHour)) {
    if (!callMap.has(hour)) {
      continue;
    }
    callMap.set(hour, executions.length);
  }

  callMap.forEach((value, key) => {
    result.push({ hour: key, cnt: value });
  });

  return result.sort();
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <TabPanel>
      <Heading as="h4" variant="heading30">
        Call frequency by hour
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={getCallTimes(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="hour" interval={0} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="linear" dataKey="cnt" stroke="#06033a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </TabPanel>
  );
};
