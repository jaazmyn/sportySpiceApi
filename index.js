import "regenerator-runtime/runtime.js";
import express from "express";
import Logger from "./middlewares/logger";
import postRoutes from "./routes/posts";
import usersRoutes from "./routes/users";

// I love fried chicken

const app = express();
const port = process.env.PORT || 3000;

app.use(Logger.print);
app.use("/posts", postRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));

export default app;
