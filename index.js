import express from "express";
import Logger from "./middlewares/logger";
import postRoutes from "./routes/posts";

const app = express();
const port = process.env.PORT || 3000;

app.use(Logger.print);
app.use("/posts", postRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));
