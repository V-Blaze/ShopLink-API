import app from "./app";
import config from "./config";

app.listen(config.PORT, () => {
  console.log(`Server started - Server is running on port ${config.PORT}`);
});
