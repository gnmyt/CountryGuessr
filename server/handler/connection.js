const {connectUserToRoom, roomExists, disconnectUser, getUserRoom} = require("../controller/room");

module.exports = (socket) => {
    let currentRoomId = null;

    socket.on("disconnect", () => {
        const roomId = getUserRoom(socket.id);
        if (roomId) socket.to(roomId).emit("user-disconnected", socket.id);

        disconnectUser(socket.id);
    });

    socket.on("join-room", ({roomId, name}) => {
        if (currentRoomId) return socket.emit("already-in-room", currentRoomId);

        if (roomExists(roomId.toString())) {
            connectUserToRoom(roomId, {id: socket.id, name: name.toString()});
            socket.join(roomId);
            socket.to(roomId).emit("user-connected", {name: name.toString(), id: socket.id});
            socket.emit("room-joined", roomId);
            currentRoomId = roomId;
        } else {
            socket.emit("room-not-found", roomId.toString());
        }
    });

    socket.on("create-room", ({name}) => {
        if (!name) return socket.emit("room-name-required");
        const roomId = Math.random().toString(36).substring(7);
        connectUserToRoom(roomId, {id: socket.id, name: name?.toString()});
        socket.join(roomId);
        socket.emit("room-created", roomId);
        currentRoomId = roomId;
    });

}