// Make it easier for us to provide some UI logic
// based on whether environment variables have been initialised

module.exports = () => {

  const {
    NETLIFY_AUTH_TOKEN = "dGiqRnuOWOkKJpYfHFTGhlHKoypxoPdaksRlkTmwDng" ,
    SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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",
    SITE_NAME = "https://elastic-blackwell-834779.netlify.app"
  } = process.env;

  return {
    ready : NETLIFY_AUTH_TOKEN && SLACK_WEBHOOK_URL ? true : false,
    NETLIFY_AUTH_TOKEN_ready : NETLIFY_AUTH_TOKEN ? true : false,
    SLACK_WEBHOOK_URL_ready : SLACK_WEBHOOK_URL ? true : false,
    SITE_NAME
  }

};
