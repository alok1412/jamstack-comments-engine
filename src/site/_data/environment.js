// Make it easier for us to provide some UI logic
// based on whether environment variables have been initialised

module.exports = () => {

  const {
    NETLIFY_API_AUTH,
    NETLIFY_APPROVED_COMMENTS_FORM_ID,
    SLACK_COMMENT_WEBHOOK_URL,
    URL
  } = process.env;

  return {
    ready : NETLIFY_API_AUTH && SLACK_COMMENT_WEBHOOK_URL ? true : false,
    NETLIFY_API_AUTH : NETLIFY_API_AUTH ? true : false,
    SLACK_COMMENT_WEBHOOK_URL : SLACK_COMMENT_WEBHOOK_URL ? true : false,
    URL
  }

};
