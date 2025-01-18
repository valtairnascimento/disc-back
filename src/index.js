const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const Loaders = require("./config");

Loaders.start();

app.listen(3000, () => {
  console.log("Server is running on port 3001");
});
