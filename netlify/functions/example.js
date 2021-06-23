const deployURL = process.env.DEPLOY_URL;
const buildID = process.env.BUILD_ID;

module.exports.handler = async function (event) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deployURL,
      buildID,
      eventHeadersHost: event.headers.host,
      eventPath: event.path
    }),
  };
};
