# Twilio Studio Insights

This repository contains a web application for browsing flow execution data from [Twilio Studio](https://www.twilio.com/studio). It was born out of the need to have a tool like [Messaging Insights](https://www.twilio.com/docs/messaging/guides/messaging-insights) for Twilio Studio.


## Demo

![Demo](demo.png?raw=true)


## Setup

1. Install the [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit).
2. Clone this repository and navigate into the resulting directory.
3. Install the application's dependecies via `npm install`.
4. Run `npm run-script build` to build the application.
5. Deploy the application to Twilio Serverless via `twilio serverless:deploy`.

That's it! Once the deployment is completed, the URL of your newly deployed application will be displayed in your terminal. Navigate to the `index.html` page to see your Studio Insights! :) 


## Limitations

The application is designed to be deployed on the [Twilio Serverless Runtime](https://www.twilio.com/docs/serverless/functions-assets). This makes the solution easy to deploy, but ultimately results in limited scalability, as application is subject to the 10 second maximum function execution and the 100 API call/second limit of the Twilio Runtime. To mitigate the risk of exceeding the execution limit, the application only displays data for the past 7 days.

To work with larger datasets it is recommended to use an external database in combination with [Twilio Event Streams](https://www.twilio.com/event-streams). For an example on how this can be implemented, please see the [Flex IVR Insights plugin](https://github.com/slintab/flex-ivr-insights) which was built using this aforementioned approach.


## Maintainer

Thanks for reading this far!
If you have any questions, do not hesitate to reach out at `hello@slintab.dev`