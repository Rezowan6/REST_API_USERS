const config = require("./configs/config");
const app = require("./app");

const PORT = config.app.port;
const hostName = "127.0.0.1";

app.listen(PORT, () => {
  console.log(`server is running at http://${hostName}:${PORT}`);
});
