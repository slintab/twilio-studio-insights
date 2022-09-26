import React from "react";
import { Card } from "@twilio-paste/core/card";
import { Tab, Tabs, TabList, TabPanels } from "@twilio-paste/core/tabs";
import CallFrequencyChart from "./CallFrequencyChart";
import CallTimesChart from "./CallTimesChart";
import CallerChart from "./CallerChart";
import TerminationChart from "./TerminationChart";
import { StudioExecution } from "utils";

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <Card padding="space70">
      <Tabs baseId="chart-tabs" variant="fitted">
        <TabList aria-label="Chart tabs">
          <Tab>Call frequency</Tab>
          <Tab>Call times</Tab>
          <Tab>Callers</Tab>
          <Tab>Terminations</Tab>
        </TabList>
        <TabPanels>
          <CallFrequencyChart data={data} />
          <CallTimesChart data={data} />
          <CallerChart data={data} />
          <TerminationChart data={data} />
        </TabPanels>
      </Tabs>
    </Card>
  );
};
