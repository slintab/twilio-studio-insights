import React from "react";
import { Box } from "@twilio-paste/core/box";
import { Combobox } from "@twilio-paste/core/combobox";
import { FlowSelectorFunction, StudioFlow } from "types";

export default ({
  flow,
  flowList,
  flowSelectFn,
}: {
  flow: StudioFlow | null;
  flowList: StudioFlow[];
  flowSelectFn: FlowSelectorFunction;
}) => {
  return (
    <Box
      marginBottom="space60"
      borderColor="colorBorderPrimaryStrong"
      borderRadius="borderRadius20"
      borderWidth="borderWidth10"
      borderStyle="groove"
      padding="space60"
    >
      <Combobox
        required
        items={flowList}
        labelText="Select a flow"
        optionTemplate={(item) => <div>{item.friendlyName}</div>}
        itemToString={(item) => item.friendlyName}
        selectedItem={flow}
        onSelectedItemChange={flowSelectFn}
      />
    </Box>
  );
};
