import React from "react";
import { Spinner } from "@twilio-paste/core/spinner";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";

export default () => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Spinner decorative={false} title="Loading" size="sizeIcon80" />
      <Text as="p">Loading data...</Text>
    </Stack>
  );
};
