import React from "react";
import { Text } from "@twilio-paste/core/text";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import ExecutionTableRowContentItem from "./ExecutionTableRowContentItem";
import { StudioFlowExecutionStep } from "types";

export default ({ data }: { data: StudioFlowExecutionStep[] }) => {
  const steps = data
    .slice()
    .reverse()
    .map((step) => {
      return (
        <Text
          as="p"
          fontSize="fontSize30"
          fontWeight="fontWeightNormal"
          key={step.sid}
        >
          {step.transitionedTo}
        </Text>
      );
    });

  const stepsWithIcons: JSX.Element[] = [];

  steps.forEach((item, index) => {
    stepsWithIcons.push(item);
    if (steps[index + 1] !== undefined) {
      stepsWithIcons.push(
        <ArrowForwardIcon key={index} decorative={true} size="sizeIcon30" />
      );
    }
  });

  return (
    <ExecutionTableRowContentItem attribute={"Steps"} value={stepsWithIcons} />
  );
};
