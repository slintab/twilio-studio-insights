import React from "react";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";
import { StudioExecution } from "utils";

function getTodaysCalls(data: StudioExecution[]) {
  let callCount = 0;

  for (const execution of data) {
    let d = new Date(execution.start).setHours(0, 0, 0, 0);
    let now = new Date().setHours(0, 0, 0, 0);
    callCount += d === now ? 1 : 0;
  }

  return callCount;
}

export default ({ data }: { data: StudioExecution[] }) => {
  return (
    <Card padding="space70">
      <Text
        as="p"
        fontWeight="fontWeightNormal"
        fontSize="fontSize70"
        textAlign="center"
        padding="space20"
      >
        {getTodaysCalls(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Calls today
      </Text>
    </Card>
  );
};
