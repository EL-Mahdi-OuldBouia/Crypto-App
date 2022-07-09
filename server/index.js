const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')

app.use(cors());// the use of cors
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});



io.on("connection", (socket) => {
    console.log('client was connected to the socket', socket.id);


    socket.on('disconnect', () => {
        console.log(`the user with id ${socket.is} was disconnected`);
    })
})



server.listen(3001, () => {
    console.log("listening on port 3001: ");
})