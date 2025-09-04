import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import path from "path";
import { configureTemplateEngine } from "./templateEngines";
const app = express();

app.use("/assets", express.static(path.join(process.cwd(), "src/assets")));
// Configure template engine
configureTemplateEngine(app);

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

/** Routes */
app.use("/api", router);

/**Global error handler (must be last)**/
app.use(errorHandler);
export default app;
