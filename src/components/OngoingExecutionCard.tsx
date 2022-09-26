import React from "react";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";
import { StudioExecution } from "utils";

function getOngoingCalls(data: StudioExecution[]) {
  let ongoingCalls = 0;

  for (const execution of data) {
    ongoingCalls += execution.status == "active" ? 1 : 0;
  }

  return ongoingCalls;
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <Card padding="space70">
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize70"
        textAlign="center"
        padding="space20"
      >
        {getOngoingCalls(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Ongoing calls
      </Text>
    </Card>
  );
};
