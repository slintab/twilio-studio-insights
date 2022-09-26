# Twilio Studio Insights

This repository contains a web application for browsing [Twilio Studio](https://www.twilio.com/studio) flow execution data. It was born out of the need to have a tool like [Messaging Insights](https://www.twilio.com/docs/messaging/guides/messaging-insights) but for Twilio Studio.

The app is designed to be deployed on the [Twilio Serverless Runtime](https://www.twilio.com/docs/serverless/functions-assets).

## Demo
![Demo](demo.png?raw=true)


## Setup

1. Install the [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit).
2. Clone this repository and navigate into the resulting directory.
3. Install the application's dependecies via `npm install`.
4. Run `npm run-script build` to build the application.
5. Deploy the application to Twilio Serverless via `twilio serverless:deploy`.

That's it! Once the deployment is completed, the URL of your newly deployed application will be displayed in your terminal. Navigate to the `index.html` page to see your Studio Insights! :) 

## Maintainer
Thanks for reading this far!
If you have any questions, do not hesitate to reach out at `hello@slintab.dev`