import { StudioFlowExecution, StudioFlowExecutionStep } from "./types";

function getDurationInSeconds(start: string, end: string) {
  const diff = Math.abs(new Date(end).getTime() - new Date(start).getTime());
  return Math.floor(Math.abs(diff) / 1000);
}

export class StudioExecution {
  sid: string;
  flow: string;
  start: string;
  end: string;
  caller: string;
  finalStep: string | undefined;
  status: "active" | "ended";
  duration: number | undefined;
  steps: StudioFlowExecutionStep[];
  durationString: string | null;

  constructor(execution: StudioFlowExecution) {
    this.sid = execution["sid"];
    this.flow = execution["flowSid"];
    this.start = execution["dateCreated"];
    this.end = execution["dateUpdated"];
    this.caller = execution["contactChannelAddress"];
    this.status = execution["status"];
    this.steps = execution["steps"];
    this.durationString = null;

    this.build(execution);
  }

  build(execution: StudioFlowExecution) {
    this.setFinalStep(execution);
    this.setDuration(execution);
    this.setDurationString(execution);
  }

  setDuration(execution: StudioFlowExecution) {
    if (this.status === "ended") {
      this.duration = getDurationInSeconds(this.start, this.end);
    }
  }

  setDurationString(execution: StudioFlowExecution) {
    if (this.duration) {
      this.durationString = `${Math.floor(this.duration / 60)}m${Math.floor(
        this.duration % 60
      )}s`;
    }
  }

  setFinalStep(execution: StudioFlowExecution) {
    if (this.status === "ended") {
      for (const step of execution.steps) {
        if (step["transitionedTo"] === "Ended") {
          this.finalStep = step["transitionedFrom"];
          break;
        }
      }
    }
  }
}
