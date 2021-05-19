import express from "express";
import authorRouter from "./authors/index";

const server = express();

const port = 3001;

server.use("/authors", authorRouter);

server.listen(port, () => {
  console.log("the server is listening on port", port);
});
