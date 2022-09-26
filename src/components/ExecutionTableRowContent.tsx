import React from "react";
import { Box } from "@twilio-paste/core/box";
import ExecutionTableRowContentItem from "./ExecutionTableRowContentItem";
import ExecutionTableRowContentStepItem from "./ExecutionTableRowContentStepItem";
import { StudioExecution } from "utils";

export default ({ data }: { data: StudioExecution }) => {
  const attributes = {
    "Execution SID": data.sid,
    "Start date": data.start,
    "Duration": data.durationString,
    "Status": data.status,
    "Caller": data.caller,
  };

  const rowContent = Object.entries(attributes).map(([k, v]) => {
    return <ExecutionTableRowContentItem attribute={k} value={v} key={k} />;
  });

  rowContent.push(
    <ExecutionTableRowContentStepItem data={data.steps} key={"steps"} />
  );

  return (
    <Box padding="space30" margin="space10">
      {rowContent}
    </Box>
  );
};
