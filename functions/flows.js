const axios = require("axios");

exports.handler = async (context, event, callback) => {
  const createResponse = () => {
    const response = new Twilio.Response();

    response.appendHeader("Access-Control-Allow-Origin", "*");
    response.appendHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    response.appendHeader("Access-Control-Allow-Headers", "Content-Type");
    response.appendHeader("Content-Type", "application/json");

    return response;
  };

  const getFlows = async () => {
    const client = context.getTwilioClient();
    const flowList = await client.studio.v2.flows.list();

    return flowList;
  };

  const response = createResponse();

  try {
    const flows = await getFlows();
    response.setBody(flows);
  } catch (e) {
    response.setStatusCode(500);
    response.setBody(e.message);
  }

  callback(null, response);
};
