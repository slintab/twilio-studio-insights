const axios = require("axios");

exports.handler = async (context, event, callback) => {
  const response = createResponse();

  if (!event.flowSid) {
    response.setStatusCode(400);
    response.setBody("Missing flowSid parameter.");

    callback(null, response);
  }

  try {
    const client = context.getTwilioClient();
    const dateNow = new Date();
    const results = [];

    dateNow.setDate(dateNow.getDate() - 7);

    const dateWeekAgo = Date.UTC(
      dateNow.getUTCFullYear(),
      dateNow.getUTCMonth(),
      dateNow.getUTCDate(),
      dateNow.getUTCHours(),
      dateNow.getUTCMinutes(),
      dateNow.getUTCSeconds()
    );

    const executions = await getExecutions(client, event.flowSid, dateWeekAgo);
    const pendingResults = executions.map((i) =>
      setExecutionSteps(client, event.flowSid, i)
    );
    const resolvedResults = await Promise.allSettled(pendingResults);

    resolvedResults.forEach((result) =>
      result.status === "fulfilled" ? results.push(result.value) : null
    );
    response.setBody(results);
  } catch (e) {
    response.setStatusCode(500);
    response.setBody(e.message);
  }
  callback(null, response);
};

function createResponse() {
  const response = new Twilio.Response();

  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  response.appendHeader("Access-Control-Allow-Headers", "Content-Type");
  response.appendHeader("Content-Type", "application/json");

  return response;
}

async function getExecutions(client, flow, from) {
  const executionList = await client.studio.v2
    .flows(flow)
    .executions.list({ dateCreatedFrom: new Date(from) });

  return executionList;
}

async function setExecutionSteps(client, flow, execution) {
  const stepList = await client.studio.v1
    .flows(flow)
    .executions(execution.sid)
    .steps.list();
  execution["steps"] = stepList;

  return execution;
}
