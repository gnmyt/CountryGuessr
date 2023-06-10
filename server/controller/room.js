let rooms = {};

module.exports.roomExists = (roomId) => rooms[roomId] !== undefined;

module.exports.connectUserToRoom = (roomId, user) => {
    if (rooms[roomId]) {
        rooms[roomId].members.push({...user, creator: false});
    } else {
        rooms[roomId] = {members: [{...user, creator: true}], settings: {}};
    }
    console.log(JSON.stringify(rooms));
}

module.exports.disconnectUser = (userId) => {
    for (const roomId in rooms) {
        const room = rooms[roomId];
        const memberIndex = room.members.findIndex(member => member.id === userId);

        if (memberIndex !== -1) {
            if (room.members[memberIndex].creator) {
                if (room.members.length > 1) room.members[1].creator = true;
            }

            room.members.splice(memberIndex, 1);
            if (room.members.length === 0) delete rooms[roomId];

            break;
        }
    }
}