import express from "express";

const server = express();

interface test {}

server.get("/", (req, res) => {
  return res.send("Hello, world!");
});

export { server };
