import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios, { AxiosResponse } from "axios";
import { Theme } from "@twilio-paste/theme";
import { Grid, Column } from "@twilio-paste/core/grid";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import AlertMessage from "./components/AlertMessage";
import Report from "./components/Report";
import { StudioExecution } from "./utils";
import { StudioFlow, StudioFlowExecution } from "./types";
import { UseSelectState } from "downshift";

const Insights = () => {
  const [flowList, setFlowList] = React.useState<StudioFlow[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);
  const [reportData, setReportData] = React.useState<StudioExecution[]>();
  const [selectedFlow, setSelectedFlow] = React.useState<StudioFlow | null>(
    null
  );

  const fetchReportData = async (flowSid: string) => {
    try {
      const resp: AxiosResponse<StudioFlowExecution[]> = await axios.get(
        "/executions?flowSid=" + flowSid
      );
      const result = resp.data.map((i) => new StudioExecution(i));
      setReportData(result);
    } catch {
      setApiError(true);
    }
  };

  const fetchFlowList = async () => {
    try {
      const resp: AxiosResponse<StudioFlow[]> = await axios.get("/flows");
      setFlowList(resp.data);
    } catch {
      setApiError(true);
    }
  };

  const onFlowSelect = async (e: Partial<UseSelectState<StudioFlow>>) => {
    if (e.selectedItem) {
      setSelectedFlow(e.selectedItem);
      setApiError(false);
      setLoading(true);
      await fetchReportData(e.selectedItem.sid);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlowList();
  }, []);

  return (
    //@ts-ignore
    <Theme.Provider theme="default">
      <div className="main">
        <Grid vertical>
          <Column>
            <SearchBar
                flow={selectedFlow}
                flowList={flowList}
                flowSelectFn={onFlowSelect}
            />
          </Column>
          <Column>
            {loading && <Loader />}
            {apiError && <AlertMessage message={"Error loading studio data."} />}
            {!loading && !apiError && reportData && (
                <Report reportData={reportData} />
            )}
          </Column>
        </Grid>
      </div>
    </Theme.Provider>
  );
  };

ReactDOM.render(<Insights />, document.getElementById("content"));
