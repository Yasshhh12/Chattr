const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    content:{
        type:string,
    },
    user1:{
        type:string
    },
    user2:{
        type:string
    },
    roomId:{
        type:string
    }
});

const chat = mongoose.model('chat',chatSchema);

module.exports = chat;