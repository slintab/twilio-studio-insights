import React from "react";
import * as _ from "lodash";
import { TabPanel } from "@twilio-paste/core/tabs";
import { Heading } from "@twilio-paste/core/heading";
import { StudioExecution } from "utils";
import { TerminationRank } from "types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getTopTerminationSteps(data: StudioExecution[]) {
  const termMap = new Map<string, number>();
  const result: TerminationRank[] = [];
  let finalStep;

  for (const execution of data) {
    finalStep = execution.finalStep;

    if (!finalStep) {
      continue;
    }

    if (!termMap.has(finalStep)) {
      termMap.set(finalStep, 1);
    } else {
      termMap.set(finalStep, termMap.get(finalStep)! + 1);
    }
  }

  termMap.forEach((value, key) => {
    result.push({ step: key, cnt: value });
  });

  return result.sort((a, b) => b.cnt - a.cnt).slice(0, 5);
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <TabPanel>
      <Heading as="h4" variant="heading30">
        Top termination steps
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={getTopTerminationSteps(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="step" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </TabPanel>
  );
};
