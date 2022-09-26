import React from "react";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";

export default ({
  attribute,
  value,
}: {
  attribute: string;
  value: string | React.ReactElement[] | null;
}) => {
  return (
    <Stack orientation="horizontal" spacing="space20">
      <Text as="p" fontSize="fontSize30" fontWeight="fontWeightMedium">
        {attribute}:
      </Text>
      {value}
    </Stack>
  );
};
