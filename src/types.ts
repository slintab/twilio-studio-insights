import { UseSelectState } from "downshift";

export interface StudioFlowExecution {
  sid: string;
  flowSid: string;
  dateCreated: string;
  dateUpdated: string;
  contactChannelAddress: string;
  status: "active" | "ended";
  steps: StudioFlowExecutionStep[];
}

export interface StudioFlowExecutionStep {
  sid: string;
  name: string;
  transitionedFrom: string;
  transitionedTo: string;
}

export interface StudioFlow {
  sid: string;
  friendlyName: string;
}

export interface CallDateFrequency {
  date: string;
  cnt: number;
}

export interface CallerRank {
  caller: string;
  cnt: number;
}

export interface CallTimeFrequency {
  hour: string;
  cnt: number;
}

export interface TerminationRank {
  step: string;
  cnt: number;
}

export type FlowSelectorFunction = (
  e: Partial<UseSelectState<StudioFlow>>
) => Promise<void>;
