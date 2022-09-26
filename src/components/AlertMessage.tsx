import React from "react";
import { Alert } from "@twilio-paste/core/alert";
import { Text } from "@twilio-paste/core/text";

export default ({ message }: { message: string }) => {
  return (
    <Alert variant="error">
      <Text as="span">
        <strong>{message}</strong>
      </Text>
    </Alert>
  );
};
