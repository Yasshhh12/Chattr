const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');

const io = socketio(server);

app.use('/',express.static(__dirname+'/frontend'));

server.listen(3000,()=>{
    console.log('Server started');
})