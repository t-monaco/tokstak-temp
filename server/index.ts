import { Hono } from "hono";
import videos from "./routes/videos";

const app = new Hono().basePath("/api/v1");

app.route("/tiktok-videos", videos);

export default app;
