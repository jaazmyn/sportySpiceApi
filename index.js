import express from "express";
import postRoutes from "./routes/posts";

const app = express();
const port = process.env.PORT || 3000;

app.use("/posts", postRoutes);

app.listen(port, () => console.log("Server listening on 3000"));
