import express from "express";
import listEndpoints from "express-list-endpoints";
import authorRouter from "./authors/index";

const server = express();

const port = 3001;

server.use("/authors", authorRouter);

console.table(listEndpoints(server));

server.listen(port, () => {
  console.log("the server is listening on port", port);
});
