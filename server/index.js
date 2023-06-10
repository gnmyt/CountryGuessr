const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();

app.disable("x-powered-by");

const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}});

io.on("connection", require("./handler/connection"));

server.listen(5287, () => {
    console.log("Server running on port 5287");
});