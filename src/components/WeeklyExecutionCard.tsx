import React from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";
import { StudioExecution } from "utils";

function getWeeksCalls(data: StudioExecution[]) {
  let callCount = 0;

  for (const execution of data) {
    let d = dayjs(execution.start);
    let now = dayjs();

    callCount += d.isoWeek === now.isoWeek ? 1 : 0;
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
        {getWeeksCalls(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Calls this week
      </Text>
    </Card>
  );
};
