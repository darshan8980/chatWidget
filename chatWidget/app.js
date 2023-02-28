const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/front/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
