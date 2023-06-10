const {connectUserToRoom, roomExists, disconnectUser} = require("../controller/room");

module.exports = (socket) => {
    console.log(socket.id + " connected")

    socket.on("disconnect", () => {
        console.log(socket.id + " disconnected");

        disconnectUser(socket.id);
    });

    socket.on("join-room", ({roomId, name}) => {
        if (roomExists(roomId.toString())) {
            connectUserToRoom(roomId, {id: socket.id, name: name.toString()});
            socket.join(roomId);
            socket.to(roomId).emit("user-connected", name.toString());
            socket.emit("room-joined", roomId);
        } else {
            socket.emit("room-not-found", roomId.toString());
        }
    });

    socket.on("create-room", ({name}) => {
        const roomId = Math.random().toString(36).substring(7);
        connectUserToRoom(roomId, {id: socket.id, name: name.toString()});
        socket.join(roomId);
        socket.emit("room-created", roomId);
    });

}