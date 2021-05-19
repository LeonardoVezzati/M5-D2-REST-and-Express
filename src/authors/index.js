import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { url } from "inspector";

//const __dirname = "";
const authorRouter = express.Router();
const filePath = fileURLToPath(import.meta.url);
const authorsFolderPath = dirname(filePath);
const authorJSONPath = join(authorsFolderPath, "authors.json");

authorRouter.post("/", (req, res) => {
  res.send("");
});
authorRouter.get("/", (req, res) => {
  const content = fs.readFileSync(authorJSONPath);
  res.send(authorsFolderPath, filePath, url: import.meta.url, authorJSONPath);
});
authorRouter.get("/:id", (req, res) => {
  res.send("");
});
authorRouter.put("/:id", (req, res) => {
  res.send("");
});
authorRouter.delete("/:id", (req, res) => {
  res.send("");
});

export default authorRouter;
