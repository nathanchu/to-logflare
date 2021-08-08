const axios = require("axios").default;

module.exports = ({ message, metadata, source, apiKey } = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `https://api.logflare.app/api/logs?source=${encodeURIComponent(
          source
        )}`,
        { message, metadata },
        { headers: { "X-Api-Key": apiKey } }
      )
      .then((res) => {
        if (res.data && res.data.message === "Logged!") {
          resolve();
        } else {
          if (res.data && res.data.message) {
            reject(res.data.message.toString());
          } else {
            reject();
          }
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
