import app from "./app";
import { ENV } from "./config/env";
import "colors";

app.listen(ENV.PORT, () => {
  console.log(`\nNode + TypeScript Express App`.bgGreen.white.bold);
  console.log(
    `🚀 Server running in ${ENV.NODE_ENV.green} mode on port ${
      ENV.PORT.toString().cyan
    }`.yellow
  );

  console.log(`--------------------------------------------------`.red);
});
